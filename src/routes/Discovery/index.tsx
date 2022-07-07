import { opacityVariants } from 'animations'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './Header'
import Medias from './Medias'

const Discovery = () => {
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      <Header />
      <AnimatePresence>
        <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
          <Medias />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

export default Discovery
