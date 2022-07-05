import Carousel from 'components/Carousel'
import { useTVTrendings } from 'hooks/trendings'
import { Suspense, useMemo } from 'react'
import TVItem from '../TVItem'

interface IProps {
  inView: boolean
}

const Week = ({ inView }: IProps) => {
  const { data } = useTVTrendings('week')

  const TVList = useMemo(() => data?.results.map((tv) => <TVItem key={tv.id} tv={tv} />), [data?.results])
  if (!inView) return null
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Carousel dragConstraints={450 * 20}>{TVList}</Carousel>
    </Suspense>
  )
}

export default Week
