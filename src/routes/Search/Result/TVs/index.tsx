import Carousel from 'components/Carousel'
import { useInfiniteSearchTVs } from 'hooks/tvs'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import InfiniteReadMore from '../InfiniteReadMore'
import List from './List'
import styles from './tvs.module.scss'

const TVs = () => {
  const [searchParam] = useSearchParams()
  const keyword = searchParam.get('keyword') || ''
  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteSearchTVs(keyword)
  const pages = useMemo(
    () => data?.pages && data.pages.map((page) => <List key={page.page} tvs={page.results} />),
    [data?.pages]
  )

  const handleClickNextPage = () => {
    if (isFetching) return
    fetchNextPage()
  }

  return (
    <div className={styles.wrapper}>
      <h3>TV Shows</h3>
      <Carousel dragConstraints={350 * (pages?.length ? pages.length * 20 : 20)}>
        {pages}
        <div className={styles.btnContainer}>
          <InfiniteReadMore inView={!!hasNextPage} handleClickNextPage={handleClickNextPage} isFetching={isFetching} />
        </div>
      </Carousel>
    </div>
  )
}

export default TVs
