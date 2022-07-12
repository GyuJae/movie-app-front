import ReadMore from 'components/ReadNow'
import { IMovie } from 'types/movie'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './movieItem.module.scss'
import { motion } from 'framer-motion'
import { opacityVariants } from 'animations'
import { useMemo } from 'react'

interface IProps {
  movie: IMovie
}

const MovieItem = ({ movie }: IProps) => {
  const backgroundImage = useMemo(
    () =>
      movie.backdrop_path ? (
        <img alt={movie.title} src={getMediaImage({ path: movie.backdrop_path, format: 'w780' })} />
      ) : null,
    [movie.backdrop_path, movie.title]
  )

  const date = useMemo(
    () => (movie.release_date ? <span className={styles.date}>{movie.release_date.split('-')[0]}</span> : null),
    [movie.release_date]
  )
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit' className={styles.wrapper}>
      {backgroundImage}
      <div className={styles.container}>
        <span className={styles.title}>{movie.title}</span>
        {date}
        <div className={styles.ratingContainer}>
          <div>IMDB</div>
          <span className={styles.date}>{movie.vote_average.toFixed(1)} rating</span>
        </div>
      </div>
      <div className={styles.readMoreContainer}>
        <ReadMore mediaId={movie.id} mediaType='movie' title={movie.title} posterPath={movie.poster_path} />
      </div>
    </motion.div>
  )
}

export default MovieItem
