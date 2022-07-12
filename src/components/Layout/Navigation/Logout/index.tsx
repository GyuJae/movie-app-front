import { authTokenVar, isLoggedinVar } from 'apollo'
import { LogoutIcon } from 'assets/svgs'
import { useMe } from 'hooks/useMe'
import styles from './logout.module.scss'

interface IProps {
  inView: boolean
}

const Logout = ({ inView }: IProps) => {
  const { data } = useMe()
  const handleClickLogout = () => {
    localStorage.removeItem('token')
    isLoggedinVar(false)
    authTokenVar(null)
  }
  if (!inView && !data) return null
  return (
    <button type='button' onClick={handleClickLogout} className={styles.logoutButton}>
      <div className={styles.container}>
        <LogoutIcon /> Logout
      </div>
    </button>
  )
}

export default Logout
