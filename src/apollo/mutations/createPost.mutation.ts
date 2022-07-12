import { gql } from '@apollo/client'

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      ok
      error
    }
  }
`

export interface ICreatePostOutput {
  ok: boolean
  error: string | null
}

export interface ICreatePostMutation {
  createBookmark: ICreatePostOutput
}

export interface ICreatePostInput {
  mediaId: number
  mediaTitle: string
  mediaType: 'movie' | 'tv'
  posterPath: string
  text: string
  vote: number
}

export interface ICreatePostVariables {
  input: ICreatePostInput
}
