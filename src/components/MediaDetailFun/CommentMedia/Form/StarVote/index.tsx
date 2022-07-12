import { useCallback } from 'react'
import ShowStarIcon from './ShowStarIcon'
import styles from './starVote.module.scss'

interface IProps {
  vote: number
}

const StarVote = ({ vote }: IProps) => {
  const statusCheck = useCallback(
    (min: number, max: number) => {
      if (vote <= min) {
        return 'none'
      }
      if (min < vote && vote < max) {
        return 'half'
      }
      return 'full'
    },
    [vote]
  )

  return (
    <div className={styles.wrapper}>
      <ShowStarIcon status={statusCheck(0, 1)} />
      <ShowStarIcon status={statusCheck(1, 2)} />
      <ShowStarIcon status={statusCheck(2, 3)} />
      <ShowStarIcon status={statusCheck(3, 4)} />
      <ShowStarIcon status={statusCheck(4, 5)} />
    </div>
  )
}

export default StarVote
