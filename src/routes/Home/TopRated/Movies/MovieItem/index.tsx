import { StarIcon } from 'assets/svgs'
import ReadNow from 'components/ReadNow'
import { useMemo } from 'react'
import { IMovie } from 'types/movie'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './movieItem.module.scss'

interface IProps {
  movie: IMovie
}

const MovieItem = ({ movie }: IProps) => {
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
      <div className={styles.rateContainer}>
        <StarIcon />
        <span>{movie.vote_average.toFixed(1)}</span>
      </div>
      <div className={styles.container}>
        <span className={styles.title}>{movie.title}</span>
        {date}
        <ReadNow mediaId={movie.id} mediaType='movie' />
      </div>
    </div>
  )
}

export default MovieItem
