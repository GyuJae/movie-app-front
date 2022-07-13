import { opacityVariants } from 'animations'
import { motion } from 'framer-motion'
import Bookmarks from './Bookmarks'
import styles from './library.module.scss'
import Recents from './Recents'

const Library = () => {
  return (
    <motion.div className={styles.wrapper} variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      <div className={styles.mediaContainer}>
        <Bookmarks />
        <Recents />
      </div>
    </motion.div>
  )
}

export default Library
