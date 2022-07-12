import { AnimatePresence, motion } from 'framer-motion'
import { userContainerVariants } from 'animations'
import { useRef } from 'react'
import { useClickAway } from 'react-use'
import { isOpenUserContainerVar } from 'apollo'
import { useReactiveVar } from '@apollo/client'
import styles from './userContainer.module.scss'
import Auth from './Auth'
import LastBookmark from './LastBookmark'
import Recent from './Recent'

const UserContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useReactiveVar(isOpenUserContainerVar)
  useClickAway(containerRef, () => isOpenUserContainerVar(false))

  if (!inView) return <AnimatePresence />
  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        variants={userContainerVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{
          type: 'tween',
          duration: 0.4,
        }}
        className={styles.wrapper}
      >
        <Auth />
        <div className={styles.mediaContainer}>
          <Recent />
          <LastBookmark />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default UserContainer
