import Carousel from 'components/Carousel'
import { useTVTrendings } from 'hooks/trendings'
import { Suspense } from 'react'
import TVItem from './TVItem'

interface IProps {
  inView: boolean
}

const TV = ({ inView }: IProps) => {
  const { data } = useTVTrendings('day')
  if (!inView) return null
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Carousel dragConstraints={450 * 20}>
        {data?.results.map((tv) => (
          <TVItem key={tv.id} tv={tv} />
        ))}
      </Carousel>
    </Suspense>
  )
}

export default TV
