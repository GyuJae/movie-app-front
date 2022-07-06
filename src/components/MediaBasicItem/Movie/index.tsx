import ReadNow from 'components/ReadNow'
import { IMovie } from 'types/movie'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './movie.module.scss'

interface IProps {
  movie: IMovie
}

const Movie = ({ movie }: IProps) => {
  if (!movie.backdrop_path || !movie.release_date) return null
  return (
    <div className={styles.wrapper}>
      <img alt={`movieItem-${movie.title}`} src={getMediaImage({ path: movie.backdrop_path, format: 'w780' })} />
      <div className={styles.container}>
        <span className={styles.title}>{movie.title}</span>
        <span className={styles.date}>{movie.release_date.split('-')[0]}</span>
        <div className={styles.ratingContainer}>
          <div>IMDB</div>
          <span className={styles.date}>{movie.vote_average.toFixed(1)} rating</span>
        </div>
      </div>
      <div className={styles.readMoreContainer}>
        <ReadNow mediaType='movie' mediaId={movie.id} />
      </div>
    </div>
  )
}

export default Movie
