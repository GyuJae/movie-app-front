import Carousel from 'components/Carousel'
import { useMovieTrendings } from 'hooks/trendings'
import { Suspense } from 'react'
import MovieItem from './MovieItem'

interface IProps {
  inView: boolean
}

const Movies = ({ inView }: IProps) => {
  const { data } = useMovieTrendings('day')
  if (!inView) return null
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Carousel dragConstraints={450 * 20}>
        {data?.results.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Carousel>
    </Suspense>
  )
}

export default Movies
