import { opacityVariants } from 'animations'
import Carousel from 'components/Carousel'
import { motion } from 'framer-motion'
import { useTvs } from 'hooks/tvs'
import { useMemo } from 'react'
import TVItem from './TVItem'

interface IProps {
  inView: boolean
}

const TVs = ({ inView }: IProps) => {
  const { data } = useTvs('top_rated')
  const TVList = useMemo(
    () =>
      data?.results.map((tv, index) => {
        const key = `topRated-tv-${tv.id}-${index}`
        return <TVItem key={key} tv={tv} />
      }),
    [data]
  )
  if (!inView) return null
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      <Carousel dragConstraints={200 * (TVList?.length || 20)}>{TVList}</Carousel>
    </motion.div>
  )
}

export default TVs
