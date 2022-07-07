import ReadMore from 'components/ReadNow'
import { ITV } from 'types/tv'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './tvItem.module.scss'
import { motion } from 'framer-motion'
import { opacityVariants } from 'animations'
import { useMemo } from 'react'

interface IProps {
  tv: ITV
}

const TVItem = ({ tv }: IProps) => {
  const backgroundImage = useMemo(
    () =>
      tv.backdrop_path ? <img alt={tv.name} src={getMediaImage({ path: tv.backdrop_path, format: 'w500' })} /> : null,
    [tv.backdrop_path, tv.name]
  )
  const date = useMemo(
    () => (tv.first_air_date ? <span className={styles.date}>{tv.first_air_date.split('-')[0]}</span> : null),
    [tv.first_air_date]
  )
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit' className={styles.wrapper}>
      {backgroundImage}
      <div className={styles.container}>
        <span className={styles.title}>{tv.name}</span>
        {date}
        <div className={styles.ratingContainer}>
          <div>IMDB</div>
          <span className={styles.date}>{tv.vote_average.toFixed(1)} rating</span>
        </div>
      </div>
      <div className={styles.readMoreContainer}>
        <ReadMore mediaId={tv.id} mediaType='tv' />
      </div>
    </motion.div>
  )
}

export default TVItem
