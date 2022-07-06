import { opacityVariants } from 'animations'
import { motion } from 'framer-motion'

interface IProps {
  inView: boolean
}

const TV = ({ inView }: IProps) => {
  if (!inView) return null
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      TV
    </motion.div>
  )
}

export default TV
