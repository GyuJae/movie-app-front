import Carousel from 'components/Carousel'
import TVItem from 'components/MediaBasicItem/TV'
import { useTVRecommendations } from 'hooks/tvs'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import styles from './recommendations.module.scss'

const Recommendations = () => {
  const { id } = useParams<Record<'id', string>>()
  const { data } = useTVRecommendations(id as string)
  const tvs = useMemo(
    () =>
      data?.results.map((tv) => {
        return <TVItem key={`tv-recommendations-${tv.name}-${tv.id}`} tv={tv} />
      }),
    [data?.results]
  )
  if (!data?.results || data.results.length === 0) return null
  return (
    <div className={styles.wrapper}>
      <h2>Recommendations</h2>
      <Carousel dragConstraints={320 * (tvs?.length || 20)}>{tvs}</Carousel>
    </div>
  )
}

export default Recommendations
