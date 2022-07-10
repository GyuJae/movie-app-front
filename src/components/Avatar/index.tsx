import { UserIcon } from 'assets/svgs'
import { useMemo } from 'react'
import { cx } from 'styles'
import { getAvatarUrl } from 'utils/getAvatarUrl'
import styles from './avatar.module.scss'

interface IProps {
  size?: 's'
  path: string | null
}

const Avatar = ({ size = 's', path }: IProps) => {
  const avatar = useMemo(() => (path ? <img alt={path} src={getAvatarUrl({ path })} /> : <UserIcon />), [path])
  return <div className={cx(styles.container, { [styles.bigAvatar]: size !== 's' })}>{avatar}</div>
}

export default Avatar
