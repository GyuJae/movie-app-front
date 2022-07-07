import Carousel from 'components/Carousel'
import { useTVWeekTrendings } from 'hooks/trendings'
import { useMemo } from 'react'
import TVItem from '../TVItem'

interface IProps {
  inView: boolean
}

const Week = ({ inView }: IProps) => {
  const { data } = useTVWeekTrendings()

  const TVList = useMemo(
    () =>
      data?.results &&
      data.results.map((tv, index) => {
        const key = `tv-week-${tv.id}-${index}`
        return <TVItem key={key} tv={tv} />
      }),
    [data?.results]
  )
  if (!inView) return null
  return <Carousel dragConstraints={360 * (TVList?.length || 20)}>{TVList}</Carousel>
}

export default Week
