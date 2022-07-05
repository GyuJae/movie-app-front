import Carousel from 'components/Carousel'
import { useMovieWeekTrendings } from 'hooks/trendings'
import { Suspense, useMemo } from 'react'
import MovieItem from '../MovieItem'

interface IProps {
  inView: boolean
}

const Week = ({ inView }: IProps) => {
  const { data } = useMovieWeekTrendings()

  const MovieList = useMemo(
    () =>
      data?.results.map((movie) => {
        const key = `movie-week-${movie.id}`
        return <MovieItem key={key} movie={movie} />
      }),
    [data?.results]
  )
  if (!inView) return null
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Carousel dragConstraints={450 * 20}>{MovieList}</Carousel>
    </Suspense>
  )
}

export default Week
