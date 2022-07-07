import { IMovie } from 'types/movie'
import Item from './Item'
import styles from './list.module.scss'

interface IProps {
  movies: IMovie[]
}

const List = ({ movies }: IProps) => {
  return (
    <ul className={styles.wrapper}>
      {movies.map((movie, index) => {
        const key = `discovery-popular-movies-${movie.id}-${index}`
        return <Item key={key} movie={movie} />
      })}
    </ul>
  )
}

export default List
