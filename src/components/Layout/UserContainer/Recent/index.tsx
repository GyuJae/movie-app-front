import { recentViewsVar } from 'apollo'
import { Link } from 'react-router-dom'
import MediaItem from '../MediaItem'
import styles from './recent.module.scss'

const Recent = () => {
  const data = recentViewsVar()[0]
  if (!data) return null
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <h3>Recent View</h3>
        <Link to='/library'>See All</Link>
      </div>
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
