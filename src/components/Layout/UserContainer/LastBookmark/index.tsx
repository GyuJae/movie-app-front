import { useLastBookmark } from 'hooks/bookmarks'
import { Link } from 'react-router-dom'
import MediaItem from '../MediaItem'
import styles from './lastBookmark.module.scss'

const LastBookmark = () => {
  const { data, error } = useLastBookmark()
  if (!data || !data.lastBookmark.bookmark || error) return null
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <h3>Bookmarked</h3>
        <Link to='/library'>See All</Link>
      </div>
      <MediaItem
        data={{
          title: data.lastBookmark.bookmark.title,
          posterPath: data.lastBookmark.bookmark.posterPath,
          mediaId: data.lastBookmark.bookmark.mediaId,
          mediaType: data.lastBookmark.bookmark.mediaType,
        }}
      />
    </div>
  )
}

export default LastBookmark
