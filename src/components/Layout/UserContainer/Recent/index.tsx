import { recentViewsVar } from 'apollo'
import MediaItem from '../MediaItem'
import styles from './recent.module.scss'

const Recent = () => {
  const data = recentViewsVar()[0]
  if (!data) return null
  return (
    <div className={styles.wrapper}>
      <h3>Recent View</h3>
      <MediaItem
        data={{
          title: data.title,
          posterPath: data.posterPath,
          mediaId: data.mediaId,
          mediaType: data.mediaType,
        }}
      />
    </div>
  )
}

export default Recent
