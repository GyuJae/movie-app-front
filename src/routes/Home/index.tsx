import { opacityVariants } from 'animations'
import { motion } from 'framer-motion'
import styles from './home.module.scss'
import Trending from './Trending'
import Upcoming from './Upcoming'
import TopRated from './TopRated'
import Popular from './Popular'
import NowPlaying from './NowPlaying'
import MainHeader from 'components/MainHeader'

const Home = () => {
  return (
    <motion.div className={styles.wrapper} variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      <MainHeader />
      <div className={styles.mediaContainer}>
        <Trending />
        <Upcoming />
        <Popular />
        <NowPlaying />
        <TopRated />
      </div>
    </motion.div>
  )
}

export default Home
