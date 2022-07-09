import Casts from './Casts'
import styles from './detailMovie.module.scss'
import Main from './Main'
import Recommendations from './Recommendations'

const DetailMovie = () => {
  return (
    <div className={styles.wrapper}>
      <Main />
      <Casts />
      <Recommendations />
    </div>
  )
}

export default DetailMovie
