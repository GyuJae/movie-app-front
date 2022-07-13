import { IIsMineComment, IIsMineCommentVariables, IS_MINE_COMMENT_QUERY } from '../apollo/queries/isMineComment.query'
import { useQuery } from '@apollo/client'

export const useIsMineComment = (commentId: number) => {
  return useQuery<IIsMineComment, IIsMineCommentVariables>(IS_MINE_COMMENT_QUERY, {
    variables: {
      input: {
        commentId,
      },
    },
  })
}
