import { authTokenVar, isLoggedinVar } from 'apollo'
import { LogoutIcon } from 'assets/svgs'
import { useMe } from 'hooks/useMe'
import { useNavigate } from 'react-router-dom'
import styles from './logout.module.scss'

interface IProps {
  inView: boolean
}

const Logout = ({ inView }: IProps) => {
  const { data } = useMe()
  const navigate = useNavigate()
  const handleClickLogout = () => {
    localStorage.removeItem('token')
    isLoggedinVar(false)
    authTokenVar(null)
    navigate(0)
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
