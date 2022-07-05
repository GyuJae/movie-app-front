import { CompassIcon, HomeIcon, SearchIcon, UsersIcon } from 'assets/svgs'
import React, { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cx } from 'styles'
import styles from './navItem.module.scss'

interface IProps {
  name: string
  pathname: string
}

const NavItem = ({ name, pathname }: IProps) => {
  const Icon = {
    Home: <HomeIcon />,
    Discovery: <CompassIcon />,
    Community: <UsersIcon />,
    Search: <SearchIcon />,
  }[name]
  const { pathname: location } = useLocation()
  return (
    <Link to={pathname}>
      <li className={cx(styles.wrapper, { [styles.current]: location === pathname })}>
        {Icon}
        {name}
      </li>
    </Link>
  )
}

export default memo(NavItem)
