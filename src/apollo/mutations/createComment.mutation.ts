import { gql } from '@apollo/client'

export const CREATE_COMMENT_MUTATION = gql`
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      ok
      error
    }
  }
`

export interface ICreateCommentOutput {
  ok: boolean
  error: string | null
}

export interface ICreateCommentMutation {
  createAccount: ICreateCommentOutput
}

export interface ICreateCommentInput {
  comment: string
  postId: number
}

export interface ICreateCommentVariables {
  input: ICreateCommentInput
}
