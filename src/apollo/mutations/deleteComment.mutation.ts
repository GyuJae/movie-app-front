import { gql } from '@apollo/client'

export const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteCommet($input: DeleteCommentInput!) {
    deleteComment(input: $input) {
      ok
      error
    }
  }
`

export interface IDeleteCommentOutput {
  ok: boolean
  error: string | null
}

export interface IDeleteCommentMutation {
  deleteComment: IDeleteCommentOutput
}

export interface IDeleteCommentInput {
  commentId: number
}

export interface IDeleteCommentVariables {
  input: IDeleteCommentInput
}
