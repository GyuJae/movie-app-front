import { AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import Movies from './Movies'
import styles from './popular.module.scss'
import TVs from './TVs'

const Popular = () => {
  const [searchParams] = useSearchParams()
  const mediaType = searchParams.get('mediaType') || 'movie'
  return (
    <div className={styles.wrapper}>
      <h3>Popular</h3>
      <AnimatePresence>
        <Movies key='popular-movies' inView={mediaType === 'movie'} />
        <TVs key='popular-tvs' inView={mediaType === 'tv'} />
      </AnimatePresence>
    </div>
  )
}

export default Popular
