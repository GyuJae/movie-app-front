import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
import Navigation from './Navigation'
import UserContainer from './UserContainer'

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <main>
        <Outlet />
      </main>

      <UserContainer />
    </div>
  )
}

export default Layout
