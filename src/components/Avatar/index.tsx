import { UserIcon } from 'assets/svgs'
import { useMe } from 'hooks/useMe'
import { useMemo } from 'react'
import { cx } from 'styles'
import { getAvatarUrl } from 'utils/getAvatarUrl'
import styles from './avatar.module.scss'

interface IProps {
  size?: 's'
}

const Avatar = ({ size = 's' }: IProps) => {
  const { data } = useMe()
  const avatar = useMemo(
    () =>
      data && data.me.user.avatar ? (
        <img alt={data.me.user.avatar} src={getAvatarUrl({ path: data.me.user.avatar })} />
      ) : (
        <UserIcon />
      ),
    [data]
  )
  return <div className={cx(styles.container, { [styles.bigAvatar]: size !== 's' })}>{avatar}</div>
}

export default Avatar
