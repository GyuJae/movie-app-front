import Carousel from 'components/Carousel'
import { useReadBookmarks } from 'hooks/bookmarks'
import { useMemo } from 'react'
import MediaItem from '../MediaItem'
import styles from './bookmarks.module.scss'

const Bookmarks = () => {
  const { data } = useReadBookmarks()

  const list = useMemo(() => {
    if (data?.readBookmarks.bookmarks.length === 0 || !data?.readBookmarks.bookmarks) return <span>No Results</span>
    return (
      <Carousel dragConstraints={140 * data.readBookmarks.bookmarks.length}>
        {data.readBookmarks.bookmarks.map((bookmark) => {
          const key = `bookmarked-${bookmark.id}`
          return <MediaItem key={key} {...bookmark} posterPath={bookmark.posterPath as string} />
        })}
      </Carousel>
    )
  }, [data?.readBookmarks.bookmarks])

  if (!data) return null

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Bookmarked</h3>
      {list}
    </div>
  )
}

export default Bookmarks
