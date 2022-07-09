import { cx } from 'styles'
import styles from './infiniteRefetch.module.scss'

interface IProps {
  inView: boolean
  handleClickNextPage: () => void
  isFetching: boolean
  isMarginTop?: boolean
}

const InfiniteRefetchBtn = ({ inView, handleClickNextPage, isFetching, isMarginTop = false }: IProps) => {
  const payload = isFetching ? 'loading...' : 'Read More'
  if (!inView) return null
  return (
    <button
      type='button'
      className={cx(styles.wrapper, { [styles.isMarginTop]: isMarginTop })}
      onClick={handleClickNextPage}
    >
      {payload}
    </button>
  )
}

export default InfiniteRefetchBtn
