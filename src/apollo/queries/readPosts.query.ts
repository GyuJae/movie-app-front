import { gql } from '@apollo/client'

export const READ_POSTS_QUERY = gql`
  query ReadPosts($input: ReadPostsInput!) {
    readPosts(input: $input) {
      ok
      error
      totalCount
      totalPage
      posts {
        createdAt
        id
        mediaId
        mediaTitle
        mediaType
        posterPath
        text
        vote
        user {
          id
          avatar
          username
        }
        _count {
          comments
          likes
        }
      }
    }
  }
`

export interface IReadPostsPost {
  __typename: 'PostWithCount'
  id: number
  createdAt: string
  mediaId: number
  mediaTitle: string
  mediaType: 'movie' | 'tv'
  posterPath: string
  text: string
  vote: number
  _count: {
    __typename: 'CountForPost'
    comments: number
    likes: number
  }
  user: {
    __typename: 'UserEntity'
    id: number
    avatar: string | null
    username: string
  }
}

export interface IReadPostsOutput {
  __typename: 'ReadPostsOutput'
  ok: boolean
  error: string | null
  totalCount: number
  totalPage: number
  posts: IReadPostsPost[]
}

export interface IReadPosts {
  readPosts: IReadPostsOutput
}

export interface IReadPostsInput {
  skip: number
  take: number
}

export interface IReadPostsVariables {
  input: IReadPostsInput
}
