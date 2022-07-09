import { Link, useSearchParams } from 'react-router-dom'
import { cx } from 'styles'
import styles from './mainHeader.module.scss'

const MainHeader = () => {
  const [searchParams] = useSearchParams()
  const mediaType = searchParams.get('mediaType') || 'movie'

  return (
    <header className={styles.wrapper}>
      <ul>
        <Link to='?mediaType=movie'>
          <li className={cx({ [styles.current]: mediaType === 'movie' })}>Movies</li>
        </Link>
        <Link to='?mediaType=tv'>
          <li className={cx({ [styles.current]: mediaType === 'tv' })}>TV Shows</li>
        </Link>
      </ul>
    </header>
  )
}

export default MainHeader
