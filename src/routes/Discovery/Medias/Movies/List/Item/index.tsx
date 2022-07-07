import { useMemo } from 'react'
import { IMovie } from 'types/movie'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './item.module.scss'

interface IProps {
  movie: IMovie
}

const Item = ({ movie }: IProps) => {
  const image = useMemo(
    () =>
      movie.poster_path ? (
        <img alt={movie.title} src={getMediaImage({ path: movie.poster_path, format: 'w500' })} />
      ) : null,
    [movie.poster_path, movie.title]
  )
  return (
    <li className={styles.item}>
      {image}
      <span>{movie.title}</span>
    </li>
  )
}

export default Item