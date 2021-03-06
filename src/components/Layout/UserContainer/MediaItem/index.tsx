import ReadNow from 'components/ReadNow'
import { useMemo } from 'react'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './mediaItem.module.scss'

interface IProps {
  data: {
    title: string
    posterPath?: string | null
    mediaId: number
    mediaType: 'movie' | 'tv'
  }
}

const MediaItem = ({ data }: IProps) => {
  const posterImage = useMemo(
    () => data.posterPath && <img alt={data.title} src={getMediaImage({ path: data.posterPath, format: 'w300' })} />,
    [data.posterPath, data.title]
  )
  return (
    <div className={styles.container}>
      {posterImage}
      <div className={styles.subContainer}>
        <span>{data.title}</span>
        <div className={styles.readNowContainer}>
          <ReadNow {...data} />
        </div>
      </div>
    </div>
  )
}

export default MediaItem
