import { gql } from '@apollo/client'

export const LIKE_TOGGLE_MUTATION = gql`
  mutation LikeToggle($input: LikeToggleInput!) {
    likeToggle(input: $input) {
      ok
      error
    }
  }
`

export interface ILikeToggleOutput {
  ok: boolean
  error: string | null
}

export interface ILikeToggleMutation {
  likeToggle: ILikeToggleOutput
}

export interface ILikeToggleInput {
  postId: number
}

export interface ILikeToggleVariables {
  input: ILikeToggleInput
}
