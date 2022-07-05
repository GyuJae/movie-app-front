import { opacityVariants } from 'animations'
import { motion } from 'framer-motion'

const Discovery = () => {
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      Discovery
    </motion.div>
  )
}

export default Discovery
