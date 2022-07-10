import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ok
      error
      token
    }
  }
`

export interface ILoginMutationOutput {
  __typename: 'LoginOutput'
  ok: boolean
  token: string | null
  error: string | null
}

export interface ILoginMutation {
  login: ILoginMutationOutput
}

export interface ILoginMutationInput {
  email: string
  password: string
}

export interface ILoginoVariables {
  input: ILoginMutationInput
}
