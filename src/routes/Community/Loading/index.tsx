import styles from './loading.module.scss'

interface IProps {
  inView: boolean
}

const Loading = ({ inView }: IProps) => {
  if (!inView) return null
  return <div className={styles.wrapper}>loading...</div>
}

export default Loading
