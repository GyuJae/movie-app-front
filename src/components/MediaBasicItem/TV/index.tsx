import ReadNow from 'components/ReadNow'
import { ITV } from 'types/tv'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './tv.module.scss'

interface IProps {
  tv: ITV
}

const TVItem = ({ tv }: IProps) => {
  if (!tv.backdrop_path || !tv.first_air_date) return null
  return (
    <div className={styles.wrapper}>
      <img alt={`tvItem-${tv.name}`} src={getMediaImage({ path: tv.backdrop_path, format: 'w780' })} />
      <div className={styles.container}>
        <span className={styles.title}>{tv.original_name}</span>
        <span className={styles.date}>{tv.first_air_date.split('-')[0]}</span>
      </div>
      <div className={styles.readMoreContainer}>
        <ReadNow mediaType='tv' mediaId={tv.id} />
      </div>
    </div>
  )
}

export default TVItem
