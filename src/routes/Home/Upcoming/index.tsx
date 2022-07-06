import { AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import Movies from './Movies'
import TV from './TV'
import styles from './upcoming.module.scss'

const Upcoming = () => {
  const [searchParams] = useSearchParams()
  const mediaType = searchParams.get('mediaType') || 'movie'
  return (
    <div className={styles.wrapper}>
      <h3>Upcoming</h3>
      <AnimatePresence>
        <Movies inView={mediaType === 'movie'} />
        <TV inView={mediaType === 'tv'} />
      </AnimatePresence>
    </div>
  )
}

export default Upcoming
