import Carousel from 'components/Carousel'
import { useInfiniteSearchMovies } from 'hooks/movies'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import InfiniteReadMore from '../InfiniteReadMore'
import List from './List'
import styles from './movies.module.scss'

const Movies = () => {
  const [searchParam] = useSearchParams()
  const keyword = searchParam.get('keyword') || ''
  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteSearchMovies(keyword)
  const pages = useMemo(
    () => data?.pages && data.pages.map((page) => <List key={page.page} movies={page.results} />),
    [data?.pages]
  )

  const handleClickNextPage = () => {
    if (isFetching) return
    fetchNextPage()
  }

  return (
    <div className={styles.wrapper}>
      <h3>Movies</h3>
      <Carousel dragConstraints={350 * (pages?.length ? pages.length * 20 : 20)}>
        {pages}
        <InfiniteReadMore inView={!!hasNextPage} handleClickNextPage={handleClickNextPage} isFetching={isFetching} />
      </Carousel>
    </div>
  )
}

export default Movies
