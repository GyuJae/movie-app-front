import { StarHalfIcon, StarIcon } from 'assets/svgs'
import { useMemo } from 'react'
import { cx } from 'styles'
import styles from './showStarIcon.module.scss'

interface IProps {
  status: 'none' | 'half' | 'full'
}

const ShowStarIcon = ({ status }: IProps) => {
  const starIcon = useMemo(
    () =>
      status !== 'half' && (
        <StarIcon className={cx({ [styles.none]: status === 'none', [styles.full]: status === 'full' })} />
      ),
    [status]
  )

  const halfIcon = useMemo(() => status === 'half' && <StarHalfIcon className={styles.half} />, [status])

  return (
    <div className={styles.container}>
      {starIcon}
      {halfIcon}
    </div>
  )
}

export default ShowStarIcon
