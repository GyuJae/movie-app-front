import ReadNow from 'components/ReadNow'
import { useMemo } from 'react'
import { IMovie } from 'types/movie'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './movie.module.scss'

interface IProps {
  movie: IMovie
}

const Movie = ({ movie }: IProps) => {
  const backgroundImage = useMemo(
    () =>
      movie.backdrop_path ? (
        <img alt={movie.title} src={getMediaImage({ path: movie.backdrop_path, format: 'w500' })} />
      ) : (
        <div />
      ),
    [movie.backdrop_path, movie.title]
  )

  const date = useMemo(
    () => (movie.release_date ? <span className={styles.date}>{movie.release_date.split('-')[0]}</span> : null),
    [movie.release_date]
  )
  return (
    <div className={styles.wrapper}>
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
        <ReadNow mediaType='movie' mediaId={movie.id} />
      </div>
    </div>
  )
}

export default Movie
