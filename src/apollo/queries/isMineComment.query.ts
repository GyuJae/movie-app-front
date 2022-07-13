import { gql } from '@apollo/client'

export const IS_MINE_COMMENT_QUERY = gql`
  query IsMineComment($input: IsMineCommentInput!) {
    isMineComment(input: $input) {
      isMine
    }
  }
`

export interface IIsMineCommentOutput {
  isMine: boolean
}

export interface IIsMineComment {
  isMineComment: IIsMineCommentOutput
}

export interface IIsMineCommentInput {
  commentId: number
}

export interface IIsMineCommentVariables {
  input: IIsMineCommentInput
}
