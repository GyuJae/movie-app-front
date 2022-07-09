import Carousel from 'components/Carousel'
import TVItem from 'components/MediaBasicItem/TV'
import { useTVSimilar } from 'hooks/tvs'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import styles from './similar.module.scss'

const Similar = () => {
  const { id } = useParams<Record<'id', string>>()
  const { data } = useTVSimilar(id as string)
  const tvs = useMemo(
    () =>
      data?.results.map((tv) => {
        return <TVItem key={`tv-similar-${tv.name}-${tv.id}`} tv={tv} />
      }),
    [data?.results]
  )
  if (!data?.results || data.results.length === 0) return null
  return (
    <div className={styles.wrapper}>
      <h2>Similar</h2>
      <Carousel dragConstraints={320 * (tvs?.length || 20)}>{tvs}</Carousel>
    </div>
  )
}

export default Similar
