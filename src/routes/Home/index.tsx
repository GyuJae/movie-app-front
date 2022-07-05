import { opacityVariant } from 'animations'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div variants={opacityVariant} initial='initial' animate='animate' exit='exit'>
      Home
    </motion.div>
  )
}

export default Home
