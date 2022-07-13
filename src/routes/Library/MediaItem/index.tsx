import ReadNow from 'components/ReadNow'
import { useMemo } from 'react'
import { IMediaSave } from 'types/mediaSave'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './mediaItem.module.scss'

interface IProps extends IMediaSave {
  id: number
}

const MediaItem = (props: IProps) => {
  const { posterPath, title } = props
  const backgroundImage = useMemo(
    () => posterPath && <img alt={title} src={getMediaImage({ path: posterPath, format: 'w500' })} />,
    [posterPath, title]
  )

  return (
    <div className={styles.wrapper}>
      {backgroundImage}
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.readMoreContainer}>
          <ReadNow {...props} />
        </div>
      </div>
    </div>
  )
}

export default MediaItem
