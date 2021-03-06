import { isOpenUserContainerVar } from 'apollo'
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
          <Avatar path={data.me.user.avatar} />
        ) : (
          <Link to='/login' style={{ all: 'unset', cursor: 'pointer' }}>
            <li>login</li>
          </Link>
        )}
      </ul>
    ),
    [data]
  )

  const handleClickOpenUserContainer = () => {
    if (data) isOpenUserContainerVar(true)
  }

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
      <button type='button' onClick={handleClickOpenUserContainer} className={styles.authButton}>
        {authList}
      </button>
    </header>
  )
}

export default MainHeader
