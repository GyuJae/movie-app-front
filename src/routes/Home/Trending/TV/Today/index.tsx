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
      data?.results.map((tv) => {
        const key = `today-tv-${tv.id}`
        return <TVItem key={key} tv={tv} />
      }),
    [data?.results]
  )
  if (!inView) return null
  return <Carousel dragConstraints={450 * 20}>{TVList}</Carousel>
}

export default Today
