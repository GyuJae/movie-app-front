import InfiniteRefetchBtn from 'components/InfiniteRefetchBtn'
import { useInfiniteMovies } from 'hooks/movies'
import { useMemo } from 'react'
import List from '../List'

interface IProps {
  inView: boolean
}

const Popular = ({ inView }: IProps) => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteMovies('popular')

  const Pages = useMemo(
    () => (data?.pages ? data.pages.map((pag) => <List key={pag.page} movies={pag.results} />) : null),
    [data?.pages]
  )

  const handleClickNextPage = () => {
    if (isFetching) return
    fetchNextPage()
  }

  if (!inView) return null
  return (
    <div>
      {Pages}
      <InfiniteRefetchBtn
        inView={hasNextPage || false}
        handleClickNextPage={handleClickNextPage}
        isFetching={isFetching}
      />
    </div>
  )
}

export default Popular
