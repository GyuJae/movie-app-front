import { useSearchParams } from 'react-router-dom'
import { TMediaType } from 'types/trending'
import Movies from './Movies'
import styles from './trending.module.scss'
import TV from './TV'

const Trending = () => {
  const [searchParams] = useSearchParams()
  const mediaType = (searchParams.get('mediaType') || 'movie') as TMediaType

  return (
    <div className={styles.wrapper}>
      <h3>Trending</h3>
      <Movies inView={mediaType === 'movie'} />
      <TV inView={mediaType === 'tv'} />
    </div>
  )
}

export default Trending
