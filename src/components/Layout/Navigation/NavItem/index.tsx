import { BookOpenIcon, CompassIcon, HomeIcon, SearchIcon, UsersIcon } from 'assets/svgs'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { memo, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cx } from 'styles'
import styles from './navItem.module.scss'

interface IProps {
  name: string
  pathname: string
}

const variants: Variants = {
  initial: {
    x: 5,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 3,
    opacity: 0,
  },
}

const NavItem = ({ name, pathname }: IProps) => {
  const Icon = {
    Home: <HomeIcon />,
    Discovery: <CompassIcon />,
    Community: <UsersIcon />,
    Search: <SearchIcon />,
    Library: <BookOpenIcon />,
  }[name]
  const { pathname: location } = useLocation()
  const RedBar = useMemo(
    () => (
      <AnimatePresence>
        {location === pathname && (
          <motion.div className={styles.redBar} variants={variants} initial='initial' animate='animate' exit='exit' />
        )}
      </AnimatePresence>
    ),
    [location, pathname]
  )
  return (
    <Link to={pathname}>
      <li className={cx(styles.wrapper, { [styles.current]: location === pathname })}>
        {Icon}
        {name}
        {RedBar}
      </li>
    </Link>
  )
}

export default memo(NavItem)
