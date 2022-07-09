import Carousel from 'components/Carousel'
import Movie from 'components/MediaBasicItem/Movie'
import { useMovieSimilar } from 'hooks/movies'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import styles from './similar.module.scss'

const Similar = () => {
  const { id } = useParams<Record<'id', string>>()
  const { data } = useMovieSimilar(id as string)
  const movies = useMemo(
    () =>
      data?.results.map((movie) => {
        return <Movie key={`movie-similar-${movie.title}-${movie.id}`} movie={movie} />
      }),
    [data?.results]
  )
  if (!data?.results || data.results.length === 0) return null
  return (
    <div className={styles.wrapper}>
      <h2>Similar</h2>
      <Carousel dragConstraints={320 * (movies?.length || 20)}>{movies}</Carousel>
    </div>
  )
}

export default Similar
