import { useSearchParams } from 'react-router-dom'
import { cx } from 'styles'
import styles from './tvs.module.scss'

const TVs = () => {
  const [searchParams] = useSearchParams()
  const mediaType = searchParams.get('mediaType') || 'movie'
  return <li className={cx(styles.item, { [styles.current]: mediaType === 'tv' })}>TV Shows</li>
}

export default TVs
