import Carousel from 'components/Carousel'
import Movie from 'components/MediaBasicItem/Movie'
import { useMovieRecommendations } from 'hooks/movies'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import styles from './recommendations.module.scss'

const Recommendations = () => {
  const { id } = useParams<Record<'id', string>>()
  const { data } = useMovieRecommendations(id as string)
  const movies = useMemo(
    () =>
      data?.results.map((movie) => {
        return <Movie key={`movie-recommendations-${movie.title}-${movie.id}`} movie={movie} />
      }),
    [data?.results]
  )
  if (!data?.results || data.results.length === 0) return null
  return (
    <div className={styles.wrapper}>
      <h2>Recommendations</h2>
      <Carousel dragConstraints={320 * (movies?.length || 20)}>{movies}</Carousel>
    </div>
  )
}

export default Recommendations
