import styles from './carousel.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { opacityVariants } from 'animations'

interface IProps {
  children: React.ReactNode
  dragConstraints: number
}

const Carousel = ({ children, dragConstraints }: IProps) => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        variants={opacityVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        className={styles.wrapper}
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.ul
          drag='x'
          dragElastic={0.01}
          dragConstraints={{ right: 0, left: -dragConstraints }}
          className={styles.container}
        >
          {children}
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  )
}

export default Carousel
