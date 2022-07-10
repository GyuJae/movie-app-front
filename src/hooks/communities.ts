import { IReadPosts, IReadPostsVariables, READ_POSTS_QUERY } from '../apollo/queries/readPosts.query'
import { useQuery } from '@apollo/client'
import { IReadPostDetail, IReadPostDetailVariables, READ_POST_DETAIL_QUERY } from 'apollo/queries/readPostDetail.query'

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

export const useReadPostDetail = (id: string) => {
  return useQuery<IReadPostDetail, IReadPostDetailVariables>(READ_POST_DETAIL_QUERY, {
    variables: {
      input: {
        postId: +id,
      },
    },
  })
}
