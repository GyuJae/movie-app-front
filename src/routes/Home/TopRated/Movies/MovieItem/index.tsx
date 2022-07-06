import { StarIcon } from 'assets/svgs'
import ReadNow from 'components/ReadNow'
import { IMovie } from 'types/movie'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './movieItem.module.scss'

interface IProps {
  movie: IMovie
}

const MovieItem = ({ movie }: IProps) => {
  if (!movie.backdrop_path || !movie.release_date) return null
  return (
    <div className={styles.wrapper}>
      <img alt={movie.title} src={getMediaImage({ path: movie.backdrop_path, format: 'w500' })} />
      <div className={styles.rateContainer}>
        <StarIcon />
        <span>{movie.vote_average.toFixed(1)}</span>
      </div>
      <div className={styles.container}>
        <span className={styles.title}>{movie.title}</span>
        <span className={styles.date}>{movie.release_date.split('-')[0]}</span>
        <ReadNow mediaId={movie.id} mediaType='movie' />
      </div>
    </div>
  )
}

export default MovieItem
