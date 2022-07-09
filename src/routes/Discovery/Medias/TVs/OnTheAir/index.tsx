import InfiniteRefetchBtn from 'components/InfiniteRefetchBtn'
import { useInfiniteTVs } from 'hooks/tvs'
import { useMemo } from 'react'
import List from '../List'

interface IProps {
  inView: boolean
}

const OnTheAir = ({ inView }: IProps) => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteTVs('on_the_air')

  const Pages = useMemo(
    () => data?.pages && data.pages.map((page) => <List key={page.page} tvs={page.results} />),
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
        isMarginTop
      />
    </div>
  )
}

export default OnTheAir
