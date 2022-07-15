import { opacityVariants } from 'animations'
import { motion } from 'framer-motion'
import { useReadPosts } from 'hooks/communities'
import { useMemo } from 'react'
import styles from './community.module.scss'
import Item from './Item'
import Loading from './Loading'

const Community = () => {
  const { data, loading } = useReadPosts({
    skip: 0,
    take: 25,
  })

  const communities = useMemo(
    () =>
      data?.readPosts.posts && (
        <ul>
          {data?.readPosts.posts.map((post) => {
            const key = `${post.id}-community`
            return <Item key={key} post={post} />
          })}
        </ul>
      ),
    [data]
  )
  return (
    <motion.div className={styles.wrapper} variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      <h3>Community</h3>
      {communities}
      <Loading inView={loading} />
    </motion.div>
  )
}

export default Community
