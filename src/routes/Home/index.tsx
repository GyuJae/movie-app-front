import { opacityVariants } from 'animations'
import Carousel from 'components/Carousel'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      <Carousel dragConstraints={1000}>
        {Array(100)
          .fill(1)
          .map((item, idx) => (
            <div key={item}>{item + idx}</div>
          ))}
      </Carousel>
    </motion.div>
  )
}

export default Home
