import { opacityVariants } from 'animations'
import { motion } from 'framer-motion'
import Header from './Header'

const Discovery = () => {
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      <Header />
    </motion.div>
  )
}

export default Discovery
