import { StarIcon } from 'assets/svgs'
import { AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import Movies from './Movies'
import styles from './topRated.module.scss'
import TVs from './TVs'

const TopRated = () => {
  const [searchParams] = useSearchParams()
  const mediaType = searchParams.get('mediaType') || 'movie'
  return (
    <div className={styles.wrapper}>
      <h3>
        Top Rated <StarIcon />
      </h3>
      <AnimatePresence>
        <Movies key='TopRated-movies' inView={mediaType === 'movie'} />
        <TVs key='TopRated-tvs' inView={mediaType === 'tv'} />
      </AnimatePresence>
    </div>
  )
}

export default TopRated
