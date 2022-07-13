import { useMutation } from '@apollo/client'
import {
  DELETE_COMMENT_MUTATION,
  IDeleteCommentMutation,
  IDeleteCommentVariables,
} from 'apollo/mutations/deleteComment.mutation'
import { READ_POST_DETAIL_QUERY } from 'apollo/queries/readPostDetail.query'
import { TrashCanIcon } from 'assets/svgs'
import { useIsMineComment } from 'hooks/useIsMineComment'
import styles from './delete.module.scss'

interface IProps {
  commentId: number
}

const Delete = ({ commentId }: IProps) => {
  const { data, error } = useIsMineComment(commentId)
  const [deleteCommentMutate, { loading }] = useMutation<IDeleteCommentMutation, IDeleteCommentVariables>(
    DELETE_COMMENT_MUTATION,
    {
      refetchQueries: [READ_POST_DETAIL_QUERY],
    }
  )
  const handleClickComment = () => {
    if (loading) return
    deleteCommentMutate({
      variables: {
        input: {
          commentId,
        },
      },
    })
  }

  if (!data || !data.isMineComment.isMine || error) return null
  return (
    <div className={styles.container}>
      <button type='button' onClick={handleClickComment} className={styles.trashButton}>
        <TrashCanIcon className={styles.trashCanIcon} />
      </button>
    </div>
  )
}

export default Delete
