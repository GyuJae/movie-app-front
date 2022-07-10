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
  id: number
  createdAt: string
  mediaId: number
  mediaTitle: string
  mediaType: 'movie' | 'tv'
  posterPath: string
  text: string
  vote: number
  _count: {
    comments: number
    likes: number
  }
  user: {
    id: number
    avatar: string | null
    username: string
  }
}

export interface IReadPostsOutput {
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
