import { IReadPosts, IReadPostsVariables, READ_POSTS_QUERY } from '../apollo/queries/readPosts.query'
import { useQuery } from '@apollo/client'

interface IUseReadPosts {
  skip: number
  take: number
}

export const useReadPosts = (input: IUseReadPosts) => {
  return useQuery<IReadPosts, IReadPostsVariables>(READ_POSTS_QUERY, {
    variables: {
      input,
    },
  })
}
