import { authTokenVar, isLoggedinVar } from 'apollo'
import { LogoutIcon } from 'assets/svgs'
import styles from './logout.module.scss'

interface IProps {
  inView: boolean
}

const Logout = ({ inView }: IProps) => {
  const handleClickLogout = () => {
    localStorage.removeItem('token')
    isLoggedinVar(false)
    authTokenVar(null)
  }
  if (!inView) return null
  return (
    <button type='button' onClick={handleClickLogout} className={styles.logoutButton}>
      <div className={styles.container}>
        <LogoutIcon /> Logout
      </div>
    </button>
  )
}

export default Logout
