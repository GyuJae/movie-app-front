import Movie from 'components/MediaBasicItem/Movie'
import { IMovie } from 'types/movie'

interface IProps {
  movies: IMovie[]
}

const List = ({ movies }: IProps) => {
  return (
    <>
      {movies.map((movie) => {
        const key = `search-movie-${movie.id}`
        return <Movie key={key} movie={movie} />
      })}
    </>
  )
}

export default List
