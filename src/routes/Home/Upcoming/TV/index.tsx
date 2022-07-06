import { opacityVariants } from 'animations'
import Carousel from 'components/Carousel'
import TVItem from 'components/MediaBasicItem/TV'
import { motion } from 'framer-motion'
import { useTvs } from 'hooks/tvs'
import { useMemo } from 'react'

interface IProps {
  inView: boolean
}

const TV = ({ inView }: IProps) => {
  const { data } = useTvs('airing_today')
  const TVList = useMemo(
    () =>
      data?.results.map((tv, index) => {
        const key = `airing-today-tv-${tv.id}-${index}`
        return <TVItem key={key} tv={tv} />
      }),
    [data]
  )
  if (!inView) return null
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      <Carousel dragConstraints={415 * 20}>{TVList}</Carousel>
    </motion.div>
  )
}

export default TV
