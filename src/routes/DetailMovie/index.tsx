import Casts from './Casts'
import styles from './detailMovie.module.scss'
import Main from './Main'
import Recommendations from './Recommendations'
import Similar from './Similar'

const DetailMovie = () => {
  return (
    <div className={styles.wrapper}>
      <Main />
      <Casts />
      <Recommendations />
      <Similar />
    </div>
  )
}

export default DetailMovie
