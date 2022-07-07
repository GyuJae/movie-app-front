import { useMovies } from 'hooks/movies'
import { useMemo } from 'react'
import MovieItem from './MovieItem'
import { motion } from 'framer-motion'
import { opacityVariants } from 'animations'
import Carousel from 'components/Carousel'

interface IProps {
  inView: boolean
}

const Movies = ({ inView }: IProps) => {
  const { data } = useMovies('top_rated')
  const MovieList = useMemo(
    () =>
      data?.results &&
      data.results.map((movie, index) => {
        const key = `topRated-movie-${movie.id}-${index}`
        return <MovieItem key={key} movie={movie} />
      }),
    [data]
  )
  if (!inView) return null
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      <Carousel dragConstraints={200 * (MovieList?.length || 20)}>{MovieList}</Carousel>
    </motion.div>
  )
}

export default Movies
