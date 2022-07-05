import ReadMore from 'components/ReadNow'
import { ITV } from 'types/tv'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './tvItem.module.scss'
import { motion } from 'framer-motion'
import { opacityVariants } from 'animations'

interface IProps {
  tv: ITV
}

const TVItem = ({ tv }: IProps) => {
  if (!tv.backdrop_path) return null
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit' className={styles.wrapper}>
      <img alt={tv.original_name} src={getMediaImage({ path: tv.backdrop_path, format: 'w780' })} />
      <div className={styles.container}>
        <span className={styles.title}>{tv.original_name}</span>
        <span className={styles.date}>{tv.first_air_date?.split('-')[0]}</span>
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
