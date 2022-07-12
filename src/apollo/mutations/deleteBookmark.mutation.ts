import { gql } from '@apollo/client'

export const DELETE_BOOKMARK_MUTATION = gql`
  mutation DeleteBookmark($input: DeleteBookmarkInput!) {
    deleteBookmark(input: $input) {
      ok
      error
    }
  }
`
export interface IDeleteBookmarkOutput {
  ok: boolean
  error: string | null
}

export interface IDeleteBookmarkMutation {
  deleteBookmark: IDeleteBookmarkOutput
}

export interface IDeleteBookmarkInput {
  mediaId: number
}

export interface IDeleteBookmarkVariables {
  input: IDeleteBookmarkInput
}
