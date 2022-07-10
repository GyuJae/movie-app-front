import { CommentIcon, HeartIcon } from 'assets/svgs'
import styles from './funcContainer.module.scss'

const FuncContainer = () => {
  return (
    <div className={styles.wrapper}>
      <button type='button'>
        <HeartIcon /> Like
      </button>
      <button type='button'>
        <CommentIcon />
        Comment
      </button>
    </div>
  )
}

export default FuncContainer
