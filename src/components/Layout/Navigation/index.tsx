import { CompassIcon, HomeIcon, SearchIcon, UsersIcon } from 'assets/svgs'
import { Link, useLocation } from 'react-router-dom'
import { cx } from 'styles'
import styles from './navigation.module.scss'

const Navigation = () => {
  const { pathname } = useLocation()
  return (
    <nav className={styles.wrapper}>
      <h3>menu</h3>
      <ul>
        <Link to='/'>
          <li className={cx({ [styles.current]: pathname === '/' })}>
            <HomeIcon />
            Home
          </li>
        </Link>
        <Link to='/discovery'>
          <li className={cx({ [styles.current]: pathname === '/discovery' })}>
            <CompassIcon /> Discovery
          </li>
        </Link>
        <Link to='/community'>
          <li className={cx({ [styles.current]: pathname === '/community' })}>
            <UsersIcon />
            Community
          </li>
        </Link>
        <Link to='/search'>
          <li className={cx({ [styles.current]: pathname === '/search' })}>
            <SearchIcon />
            Search
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navigation
