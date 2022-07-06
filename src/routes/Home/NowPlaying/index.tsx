import { AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import Movies from './Movies'
import TV from './TV'
import styles from './nowPlaying.module.scss'

const NowPlaying = () => {
  const [searchParams] = useSearchParams()
  const mediaType = searchParams.get('mediaType') || 'movie'
  const title = mediaType === 'movie' ? 'Now Playing' : 'On The Air'
  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
      <AnimatePresence>
        <Movies key='now-playing-movies' inView={mediaType === 'movie'} />
        <TV key='on-the-air-tvs' inView={mediaType === 'tv'} />
      </AnimatePresence>
    </div>
  )
}

export default NowPlaying
