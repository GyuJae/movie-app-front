import { useReactiveVar } from '@apollo/client'
import { recentViewsVar } from 'apollo'
import Carousel from 'components/Carousel'
import { useMemo } from 'react'
import MediaItem from '../MediaItem'
import styles from './recents.module.scss'

const Recents = () => {
  const data = useReactiveVar(recentViewsVar)

  const list = useMemo(() => {
    if (data?.length === 0 || !data) return <span>No Results</span>
    return (
      <Carousel dragConstraints={140 * data.length}>
        {data.map((recent) => {
          const key = `recent-${recent.mediaId}-${recent.mediaType}`
          return <MediaItem key={key} id={recent.mediaId} {...recent} />
        })}
      </Carousel>
    )
  }, [data])

  if (!data) return null

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Recent Views</h3>
      {list}
    </div>
  )
}

export default Recents
