import { useSearchParams } from 'react-router-dom'
import styles from './medias.module.scss'
import Movies from './Movies'
import TVs from './TVs'

const Medias = () => {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'top_rated'
  const categoryName =
    {
      top_rated: 'Top Rated',
      popular: 'Popular',
      upcoming: 'Upcoming',
      now_playing: 'Now Playing',
      airing_today: 'Airing Today',
      on_the_air: 'On The Air',
    }[categoryParam] || 'Media'
  const mediaType = searchParams.get('mediaType') || 'movie'
  return (
    <div className={styles.wrapper}>
      <h3>{categoryName}</h3>
      <div className={styles.mediaContainer}>
        <Movies inView={mediaType === 'movie'} />
        <TVs inView={mediaType === 'tv'} />
      </div>
    </div>
  )
}

export default Medias
