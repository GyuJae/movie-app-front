import { CommentIcon } from 'assets/svgs'
import styles from './funcContainer.module.scss'
import Heart from './Heart'

const FuncContainer = () => {
  return (
    <div className={styles.wrapper}>
      <Heart />
      <button type='button'>
        <CommentIcon />
        Comment
      </button>
    </div>
  )
}

export default FuncContainer
