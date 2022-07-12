import { ICreateBookmarkInput } from 'apollo/mutations/createBookmark.mutation'
import Bookmarked from './Bookmarked'
import CommentMedia from './CommentMedia'
import styles from './mediaDetailFun.module.scss'

interface IProps {
  mediaInput: ICreateBookmarkInput
}

const MediaDetailFun = ({ mediaInput }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <Bookmarked mediaInput={mediaInput} />
      <CommentMedia
        mediaInput={{
          mediaId: mediaInput.mediaId,
          mediaTitle: mediaInput.title,
          mediaType: mediaInput.mediaType,
          posterPath: mediaInput.posterPath,
        }}
      />
    </div>
  )
}

export default MediaDetailFun
