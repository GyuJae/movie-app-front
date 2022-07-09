import Casts from './Casts'
import styles from './detailTV.module.scss'
import Main from './Main'
import Recommendations from './Recommendations'
import Similar from './Similar'

const DetailTV = () => {
  return (
    <div className={styles.wrapper}>
      <Main />
      <Casts />
      <Recommendations />
      <Similar />
    </div>
  )
}

export default DetailTV
