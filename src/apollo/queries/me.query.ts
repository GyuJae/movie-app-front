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
  id: number
  avatar: string | null
  email: string
  username: string
}

export interface meQuery {
  me: {
    user: userOutput
  }
}
