import { PencliIcon } from 'assets/svgs'
import Avatar from 'components/Avatar'
import { useMe } from 'hooks/useMe'
import styles from './auth.module.scss'

const Auth = () => {
  const { data } = useMe()
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Avatar path={data?.me.user.avatar} />
        <div className={styles.nameContainer}>
          <span className={styles.username}>{data?.me.user.username}</span>
          <span className={styles.email}>{data?.me.user.email}</span>
        </div>
      </div>
      <PencliIcon className={styles.pencli} />
    </div>
  )
}

export default Auth
