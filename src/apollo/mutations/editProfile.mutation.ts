import { gql } from '@apollo/client'

export const EDIT_PROFILE_MUTATION = gql`
  mutation EditProfile($input: EditProfileInput!) {
    editProfile(input: $input) {
      ok
      error
    }
  }
`

export interface IEditProfilOutput {
  ok: boolean
  error: string | null
}

export interface IEditProfilMutation {
  editProfile: IEditProfilOutput
}

export interface IEditProfilInput {
  username?: string
  avatar?: string
}

export interface IEditProfilVariables {
  input: IEditProfilInput
}
