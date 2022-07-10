import { IReadPostDetailComment } from 'apollo/queries/readPostDetail.query'
import Avatar from 'components/Avatar'
import dayjs from 'dayjs'
import styles from './comment.module.scss'

interface IProps {
  comment: IReadPostDetailComment
}
const Comment = ({ comment }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <Avatar path={comment.user.avatar} />
      <div className={styles.container}>
        <span>{comment.user.username}</span>
        <span className={styles.comment}>{comment.comment}</span>
      </div>
      <div className={styles.createdAt}>{dayjs(comment.createdAt).format('YYYY-MM-DD hh:mm')}</div>
    </div>
  )
}

export default Comment
