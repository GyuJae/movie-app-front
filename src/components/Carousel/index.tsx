import styles from './carousel.module.scss'
import { motion } from 'framer-motion'

interface IProps {
  children: React.ReactNode
  dragConstraints: number
}

const Carousel = ({ children, dragConstraints }: IProps) => {
  return (
    <motion.div className={styles.wrapper} whileTap={{ cursor: 'grabbing' }}>
      <motion.ul
        drag='x'
        dragElastic={0.01}
        dragConstraints={{ right: 0, left: -dragConstraints }}
        className={styles.container}
      >
        {children}
      </motion.ul>
    </motion.div>
  )
}

export default Carousel
