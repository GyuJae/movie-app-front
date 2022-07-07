import styles from './header.module.scss'
import Movies from './Movies'
import TVs from './TVs'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <ul className={styles.headerContainer}>
        <Movies />
        <TVs />
      </ul>
    </header>
  )
}

export default Header
