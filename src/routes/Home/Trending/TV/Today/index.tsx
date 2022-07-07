import Carousel from 'components/Carousel'
import { useTVDayTrendings } from 'hooks/trendings'
import { useMemo } from 'react'
import TVItem from '../TVItem'

interface IProps {
  inView: boolean
}

const Today = ({ inView }: IProps) => {
  const { data } = useTVDayTrendings()

  const TVList = useMemo(
    () =>
      data?.results &&
      data.results.map((tv, index) => {
        const key = `today-tv-${tv.id}-${index}`
        return <TVItem key={key} tv={tv} />
      }),
    [data?.results]
  )
  if (!inView) return null
  return <Carousel dragConstraints={360 * (TVList?.length || 20)}>{TVList}</Carousel>
}

export default Today
