import Avatar from 'components/Avatar'
import { useMe } from 'hooks/useMe'
import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { cx } from 'styles'
import styles from './mainHeader.module.scss'

const MainHeader = () => {
  const { data } = useMe()

  const [searchParams] = useSearchParams()
  const mediaType = searchParams.get('mediaType') || 'movie'

  const authList = useMemo(
    () => (
      <ul>
        {data ? (
          <Avatar />
        ) : (
          <Link to='/login' style={{ all: 'unset', cursor: 'pointer' }}>
            <li>login</li>
          </Link>
        )}
      </ul>
    ),
    [data]
  )

  return (
    <header className={cx(styles.wrapper, { [styles.isLoggedIn]: !!data })}>
      <ul className={styles.mediaContainer}>
        <Link to='?mediaType=movie'>
          <li className={cx({ [styles.current]: mediaType === 'movie' })}>Movies</li>
        </Link>
        <Link to='?mediaType=tv'>
          <li className={cx({ [styles.current]: mediaType === 'tv' })}>TV Shows</li>
        </Link>
      </ul>
      {authList}
    </header>
  )
}

export default MainHeader
