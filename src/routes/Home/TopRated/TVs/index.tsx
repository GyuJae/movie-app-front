import { opacityVariants } from 'animations'
import { motion } from 'framer-motion'

interface IProps {
  inView: boolean
}

const TVs = ({ inView }: IProps) => {
  if (!inView) return null
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      TVs
    </motion.div>
  )
}

export default TVs
