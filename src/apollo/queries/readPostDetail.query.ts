import { gql } from '@apollo/client'

export const READ_POST_DETAIL_QUERY = gql`
  query ReadPostDetail($input: ReadPostDetailInput!) {
    readPostDetail(input: $input) {
      ok
      error
      post {
        id
        createdAt
        mediaId
        mediaTitle
        mediaType
        posterPath
        text
        vote
        _count {
          comments
          likes
        }
        user {
          id
          avatar
          username
        }
        comments {
          comment
          createdAt
          id
          user {
            id
            avatar
            username
          }
        }
      }
    }
  }
`

export interface IReadPostDetailComment {
  id: number
  comment: string
  createdAt: string
  user: {
    id: number
    username: string
    avatar: string | null
  }
}

export interface IReadPostDetailPost {
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
  comments: IReadPostDetailComment[]
}

export interface IReadPostDetailOutput {
  ok: boolean
  error: string | null
  post: IReadPostDetailPost
}

export interface IReadPostDetail {
  readPostDetail: IReadPostDetailOutput
}

export interface IReadPostDetailInput {
  postId: number
}

export interface IReadPostDetailVariables {
  input: IReadPostDetailInput
}
