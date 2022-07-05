import { AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { TMediaType } from 'types/trending'
import MoviesToday from './Movies/Today'
import MovieWeek from './Movies/Week'
import TimeToggle from './TimeToggle'
import styles from './trending.module.scss'
import TVToday from './TV/Today'
import TVWeek from './TV/Week'

const Trending = () => {
  const [searchParams] = useSearchParams()
  const mediaType = (searchParams.get('mediaType') || 'movie') as TMediaType
  const time = searchParams.get('time') || 'day'

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <h3>Trending</h3>
        <TimeToggle />
      </div>
      <AnimatePresence>
        <MoviesToday key='trending-movie-day' inView={mediaType === 'movie' && time === 'day'} />
        <TVToday key='trending-tv-day' inView={mediaType === 'tv' && time === 'day'} />
        <MovieWeek key='trending-movie-week' inView={mediaType === 'movie' && time === 'week'} />
        <TVWeek key='trending-tv-week' inView={mediaType === 'tv' && time === 'week'} />
      </AnimatePresence>
    </div>
  )
}

export default Trending
