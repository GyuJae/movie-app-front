import { useQuery } from '@apollo/client'
import { meQuery, ME_QUERY } from 'apollo/queries/me.query'

export const useMe = () => {
  return useQuery<meQuery>(ME_QUERY)
}
