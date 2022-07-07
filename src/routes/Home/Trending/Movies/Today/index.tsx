import Carousel from 'components/Carousel'
import { useMovieDayTrendings } from 'hooks/trendings'
import { useMemo } from 'react'
import MovieItem from '../MovieItem'

interface IProps {
  inView: boolean
}

const Today = ({ inView }: IProps) => {
  const { data } = useMovieDayTrendings()

  const MovieList = useMemo(
    () =>
      data?.results &&
      data.results.map((movie, index) => {
        const key = `movie-today-${movie.id}-${index}`
        return <MovieItem key={key} movie={movie} />
      }),
    [data?.results]
  )

  if (!inView) return null
  return <Carousel dragConstraints={360 * (MovieList?.length || 20)}>{MovieList}</Carousel>
}

export default Today
