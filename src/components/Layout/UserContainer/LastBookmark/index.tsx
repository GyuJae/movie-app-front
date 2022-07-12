import { useLastBookmark } from 'hooks/bookmarks'
import MediaItem from '../MediaItem'
import styles from './lastBookmark.module.scss'

const LastBookmark = () => {
  const { data } = useLastBookmark()
  if (!data) return null
  return (
    <div className={styles.wrapper}>
      <h3>Bookmarked</h3>
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
