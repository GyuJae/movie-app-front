import { opacityVariants } from 'animations'
import { motion } from 'framer-motion'

const Community = () => {
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      Community
    </motion.div>
  )
}

export default Community
