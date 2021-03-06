import { AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import Movies from './Movies'
import TV from './TV'
import styles from './upcoming.module.scss'

const Upcoming = () => {
  const [searchParams] = useSearchParams()
  const mediaType = searchParams.get('mediaType') || 'movie'
  const title = mediaType === 'movie' ? 'Upcoming' : 'Airing Today'
  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
      <AnimatePresence>
        <Movies key='upcoming-movies' inView={mediaType === 'movie'} />
        <TV key='airingToday-tvs' inView={mediaType === 'tv'} />
      </AnimatePresence>
    </div>
  )
}

export default Upcoming
