import ReadNow from 'components/ReadNow'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './mediaItem.module.scss'

interface IProps {
  data: {
    title: string
    posterPath: string
    mediaId: number
    mediaType: 'movie' | 'tv'
  }
}

const MediaItem = ({ data }: IProps) => {
  return (
    <div className={styles.container}>
      <img alt={data.title} src={getMediaImage({ path: data.posterPath, format: 'w300' })} />
      <div className={styles.subContainer}>
        <span>{data.title}</span>
        <ReadNow mediaId={data.mediaId} mediaType={data.mediaType} />
      </div>
    </div>
  )
}

export default MediaItem
