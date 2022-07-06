import { opacityVariants } from 'animations'
import Carousel from 'components/Carousel'
import Movie from 'components/MediaBasicItem/Movie'
import { motion } from 'framer-motion'
import { useMovies } from 'hooks/movies'
import { useMemo } from 'react'

interface IProps {
  inView: boolean
}

const Movies = ({ inView }: IProps) => {
  const { data } = useMovies('upcoming')
  const MovieList = useMemo(
    () =>
      data?.results.map((movie) => {
        const key = `upcoming-movie-${movie.id}`
        return <Movie key={key} movie={movie} />
      }),
    [data]
  )
  if (!inView) return null
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      <Carousel dragConstraints={415 * 20}>{MovieList}</Carousel>
    </motion.div>
  )
}

export default Movies
