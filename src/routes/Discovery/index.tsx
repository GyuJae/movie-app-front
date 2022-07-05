import { opacityVariant } from 'animations'
import { motion } from 'framer-motion'

const Discovery = () => {
  return (
    <motion.div variants={opacityVariant} initial='initial' animate='animate' exit='exit'>
      Discovery
    </motion.div>
  )
}

export default Discovery
