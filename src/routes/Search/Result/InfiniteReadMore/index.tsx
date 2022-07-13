import { cx } from 'styles'
import styles from './infiniteReadMore.module.scss'

interface IProps {
  inView: boolean
  handleClickNextPage: () => void
  isFetching: boolean
  isMarginTop?: boolean
}

const InfiniteReadMore = ({ inView, handleClickNextPage, isFetching, isMarginTop = false }: IProps) => {
  const payload = isFetching ? 'loading...' : 'Read More'
  if (!inView) return null
  return (
    <div className={styles.wrapper}>
      <button
        type='button'
        className={cx(styles.container, { [styles.isMarginTop]: isMarginTop })}
        onClick={handleClickNextPage}
      >
        {payload}
      </button>
    </div>
  )
}

export default InfiniteReadMore
