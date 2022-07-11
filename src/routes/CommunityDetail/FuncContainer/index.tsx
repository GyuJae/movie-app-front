import Comment from './Comment'
import styles from './funcContainer.module.scss'
import Heart from './Heart'

const FuncContainer = () => {
  return (
    <div className={styles.wrapper}>
      <Heart />
      <Comment />
    </div>
  )
}

export default FuncContainer
