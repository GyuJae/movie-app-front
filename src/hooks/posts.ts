import { IIsLikePost, IIsLikePostVariables, IS_LIKE_QUERY } from '../apollo/queries/isLikePost.query'
import { useQuery } from '@apollo/client'

export const useIsLikePost = (postId: string) => {
  return useQuery<IIsLikePost, IIsLikePostVariables>(IS_LIKE_QUERY, {
    variables: {
      input: {
        postId: +postId,
      },
    },
  })
}
