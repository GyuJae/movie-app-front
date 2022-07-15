import Carousel from 'components/Carousel'
import { useMovieCredits } from 'hooks/movies'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './casts.module.scss'

const Casts = () => {
  const { id } = useParams<Record<'id', string>>()
  const { data } = useMovieCredits(id as string)
  const casts = useMemo(
    () =>
      data?.cast.map((people) => {
        if (!people.profile_path) return null
        return (
          <li key={`cast-${people.name}-${people.id}`} className={styles.item}>
            <img alt={people.name} src={getMediaImage({ path: people.profile_path, format: 'w300' })} />
            <div>{people.name}</div>
          </li>
        )
      }),
    [data?.cast]
  )
  const dragConstraints = useMemo(() => 150 * (data?.cast.length || 20), [data?.cast])
  if (!data?.cast || data.cast.length === 0) return null
  return (
    <div className={styles.wrapper}>
      <h2>Casts</h2>
      <Carousel dragConstraints={dragConstraints}>{casts}</Carousel>
    </div>
  )
}

export default Casts
