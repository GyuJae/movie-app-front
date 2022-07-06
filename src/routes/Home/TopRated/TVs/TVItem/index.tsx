import { StarIcon } from 'assets/svgs'
import ReadNow from 'components/ReadNow'
import { useMemo } from 'react'
import { ITV } from 'types/tv'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './tvItem.module.scss'

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
    <div className={styles.wrapper}>
      {backgroundImage}
      <div className={styles.rateContainer}>
        <StarIcon />
        <span>{tv.vote_average.toFixed(1)}</span>
      </div>
      <div className={styles.container}>
        <span className={styles.title}>{tv.name}</span>
        {date}
        <ReadNow mediaId={tv.id} mediaType='tv' />
      </div>
    </div>
  )
}

export default TVItem
