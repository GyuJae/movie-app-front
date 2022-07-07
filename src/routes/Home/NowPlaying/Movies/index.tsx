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
  const { data } = useMovies('now_playing')
  const MovieList = useMemo(
    () =>
      data?.results &&
      data.results.map((movie, index) => {
        const key = `now-playing-movie-${movie.id}-${index}`
        return <Movie key={key} movie={movie} />
      }),
    [data]
  )
  if (!inView) return null
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      <Carousel dragConstraints={320 * (MovieList?.length || 20)}>{MovieList}</Carousel>
    </motion.div>
  )
}

export default Movies
