import { gql } from '@apollo/client'

export const ME_QUERY = gql`
  query Me {
    me {
      user {
        id
        avatar
        email
        username
      }
    }
  }
`
export interface userOutput {
  __typename: 'UserEntity'
  id: number
  avatar: string | null
  email: string
  username: string
}

export interface meQuery {
  __typename: 'MeOutput'
  me: {
    user: userOutput
  }
}
