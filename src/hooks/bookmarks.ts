import { IS_ME_BOOKMARK_QUERY, IIsMeBookmark, IIsMeBookmarkVariables } from 'apollo/queries/isMeBookmark'
import { useQuery } from '@apollo/client'

import { ILastBookmark, LAST_BOOKMARK_QUERY } from 'apollo/queries/lastBookmark.query'
import { IReadBookmarksQuery, READ_BOOKMARKS_QUERY } from 'apollo/queries/readBookmarks.query'

export const useLastBookmark = () => {
  return useQuery<ILastBookmark>(LAST_BOOKMARK_QUERY)
}

export const useIsMeBookmark = (mediaId: number) => {
  return useQuery<IIsMeBookmark, IIsMeBookmarkVariables>(IS_ME_BOOKMARK_QUERY, {
    variables: {
      input: {
        mediaId,
      },
    },
  })
}

export const useReadBookmarks = () => {
  return useQuery<IReadBookmarksQuery>(READ_BOOKMARKS_QUERY)
}
