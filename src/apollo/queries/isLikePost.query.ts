import { gql } from '@apollo/client'

export const IS_LIKE_QUERY = gql`
  query IsLikePost($input: IsLikePostInput!) {
    isLikePost(input: $input) {
      isLike
    }
  }
`

export interface IIsLikePostOutput {
  ok: boolean
  error: string | null
  isLike: boolean
}

export interface IIsLikePost {
  isLikePost: IIsLikePostOutput
}

export interface IIsLikePostInput {
  postId: number
}

export interface IIsLikePostVariables {
  input: IIsLikePostInput
}
