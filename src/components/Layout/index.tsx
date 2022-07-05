import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
import Navigation from './Navigation'

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
