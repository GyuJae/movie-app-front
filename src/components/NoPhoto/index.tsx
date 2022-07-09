import { FilmIcon } from 'assets/svgs'
import styles from './noPhoto.module.scss'

const NoPhoto = () => {
  return (
    <div className={styles.noPhoto}>
      <FilmIcon />
      <span>No Photo</span>
    </div>
  )
}

export default NoPhoto
