import { useReactiveVar } from '@apollo/client'
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
  {
    name: 'Library',
    pathname: '/library',
  },
]

const Navigation = () => {
  const isLoggedIn = useReactiveVar(isLoggedinVar)
  const NavItemList = useMemo(
    () => (
      <ul>
        {items.map((item) => {
          if (!isLoggedIn && item.name === 'Library') return null
          return <NavItem key={item.pathname} name={item.name} pathname={item.pathname} />
        })}
      </ul>
    ),
    [isLoggedIn]
  )
  return (
    <nav className={styles.wrapper}>
      <div>
        <h3>menu</h3>
        {NavItemList}
      </div>
      <Logout inView={!!isLoggedIn} />
    </nav>
  )
}

export default Navigation
