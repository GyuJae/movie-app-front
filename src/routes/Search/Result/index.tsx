import Movies from './Movies'
import styles from './result.module.scss'
import TVs from './TVs'

interface IProps {
  inView: boolean
}

const Result = ({ inView }: IProps) => {
  if (!inView) return null
  return (
    <div className={styles.wrapper}>
      <Movies />
      <TVs />
    </div>
  )
}

export default Result
