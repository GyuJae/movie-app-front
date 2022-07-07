import styles from './infiniteRefetch.module.scss'

interface IProps {
  inView: boolean
  handleClickNextPage: () => void
  isFetching: boolean
}

const InfiniteRefetchBtn = ({ inView, handleClickNextPage, isFetching }: IProps) => {
  const payload = isFetching ? 'loading...' : 'Read More'
  if (!inView) return null
  return (
    <button type='button' className={styles.wrapper} onClick={handleClickNextPage}>
      {payload}
    </button>
  )
}

export default InfiniteRefetchBtn
