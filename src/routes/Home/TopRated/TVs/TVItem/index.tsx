import { StarIcon } from 'assets/svgs'
import ReadNow from 'components/ReadNow'
import { ITV } from 'types/tv'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './tvItem.module.scss'

interface IProps {
  tv: ITV
}

const TVItem = ({ tv }: IProps) => {
  if (!tv.backdrop_path || !tv.first_air_date) return null
  return (
    <div className={styles.wrapper}>
      <img alt={tv.name} src={getMediaImage({ path: tv.backdrop_path, format: 'w500' })} />
      <div className={styles.rateContainer}>
        <StarIcon />
        <span>{tv.vote_average.toFixed(1)}</span>
      </div>
      <div className={styles.container}>
        <span className={styles.title}>{tv.name}</span>
        <span className={styles.date}>{tv.first_air_date.split('-')[0]}</span>
        <ReadNow mediaId={tv.id} mediaType='tv' />
      </div>
    </div>
  )
}

export default TVItem
