import { useQuery } from '@apollo/client'
import { ILastBookmark, LAST_BOOKMARK_QUERY } from 'apollo/queries/lastBookmark.query'

export const useLastBookmark = () => {
  return useQuery<ILastBookmark>(LAST_BOOKMARK_QUERY)
}
