import { gql } from '@apollo/client'

export const CREATE_ACCOUNT_MUTATION = gql`
  mutation CreateAccount($input: CraeteAccountInput!) {
    createAccount(input: $input) {
      ok
      error
    }
  }
`

export interface ICreateAccountOutput {
  __typename: 'CreateAccountOutput'
  ok: boolean
  error: string | null
}

export interface ICreateAccountMutation {
  createAccount: ICreateAccountOutput
}

export interface ICreateAccountInput {
  email: string
  username: string
  password: string
}

export interface ICreateAccountVariables {
  input: ICreateAccountInput
}
