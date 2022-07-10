import { isLoggedinVar } from 'apollo'
import { useMemo } from 'react'
import Logout from './Logout'
import styles from './navigation.module.scss'
import NavItem from './NavItem'

const items = [
  {
    name: 'Home',
    pathname: '/',
  },
  {
    name: 'Discovery',
    pathname: '/discovery',
  },
  {
    name: 'Community',
    pathname: '/community',
  },
  {
    name: 'Search',
    pathname: '/search',
  },
]

const Navigation = () => {
  const NavItemList = useMemo(
    () => (
      <ul>
        {items.map((item) => (
          <NavItem key={item.pathname} name={item.name} pathname={item.pathname} />
        ))}
      </ul>
    ),
    []
  )
  return (
    <nav className={styles.wrapper}>
      <div>
        <h3>menu</h3>
        {NavItemList}
      </div>
      <Logout inView={!!isLoggedinVar()} />
    </nav>
  )
}

export default Navigation
