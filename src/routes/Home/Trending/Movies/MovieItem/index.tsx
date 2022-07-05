import ReadMore from 'components/ReadNow'
import { IMovie } from 'types/movie'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './movieItem.module.scss'

interface IProps {
  movie: IMovie
}

const MovieItem = ({ movie }: IProps) => {
  if (!movie.backdrop_path) return null
  return (
    <div className={styles.wrapper}>
      <img alt={movie.original_title} src={getMediaImage({ path: movie.backdrop_path, format: 'w780' })} />
      <div className={styles.container}>
        <span className={styles.title}>{movie.original_title}</span>
        <span className={styles.date}>{movie.release_date?.split('-')[0]}</span>
        <div className={styles.ratingContainer}>
          <div>IMDB</div>
          <span className={styles.date}>{movie.vote_average.toFixed(1)} rating</span>
        </div>
      </div>
      <div className={styles.readMoreContainer}>
        <ReadMore mediaId={movie.id} mediaType='movie' />
      </div>
    </div>
  )
}

export default MovieItem
