import { IReadPostDetailComment } from 'apollo/queries/readPostDetail.query'
import { useMemo } from 'react'
import Comment from './Comment'
import styles from './comments.module.scss'

interface IProps {
  comments: IReadPostDetailComment[]
}

const Comments = ({ comments }: IProps) => {
  const commentList = useMemo(
    () => (
      <ul className={styles.commentsList}>
        {comments.map((comment) => {
          const key = `comment-${comment.id}`
          return <Comment key={key} comment={comment} />
        })}
      </ul>
    ),
    [comments]
  )
  return <div className={styles.wrapper}>{commentList}</div>
}

export default Comments
