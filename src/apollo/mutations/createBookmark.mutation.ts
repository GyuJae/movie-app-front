import { gql } from '@apollo/client'

export const CREATE_BOOKMARK_MUTATION = gql`
  mutation CreateBookmark($input: CreateBookmarkInput!) {
    createBookmark(input: $input) {
      ok
      error
    }
  }
`

export interface ICreateBookmarkOutput {
  ok: boolean
  error: string | null
}

export interface ICreateBookmarkMutation {
  createBookmark: ICreateBookmarkOutput
}

export interface ICreateBookmarkInput {
  mediaId: number
  mediaType: 'movie' | 'tv'
  posterPath: string
  releaseDate: string
  title: string
  vote: number
}

export interface ICreateBookmarkVariables {
  input: ICreateBookmarkInput
}
