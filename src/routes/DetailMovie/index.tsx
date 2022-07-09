import Casts from './Casts'
import styles from './detailMovie.module.scss'
import Main from './Main'

const DetailMovie = () => {
  return (
    <div className={styles.wrapper}>
      <Main />
      <Casts />
    </div>
  )
}

export default DetailMovie
