import { opacityVariant } from 'animations'
import { motion } from 'framer-motion'

const Search = () => {
  return (
    <motion.div variants={opacityVariant} initial='initial' animate='animate' exit='exit'>
      Search
    </motion.div>
  )
}

export default Search
