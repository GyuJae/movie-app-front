import Carousel from 'components/Carousel'
import { useMovieTrendings } from 'hooks/trendings'
import { Suspense, useMemo } from 'react'
import MovieItem from '../MovieItem'

interface IProps {
  inView: boolean
}

const Today = ({ inView }: IProps) => {
  const { data } = useMovieTrendings('day')

  const MovieList = useMemo(
    () => data?.results.map((movie) => <MovieItem key={movie.id} movie={movie} />),
    [data?.results]
  )
  if (!inView) return null
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Carousel dragConstraints={450 * 20}>{MovieList}</Carousel>
    </Suspense>
  )
}

export default Today
