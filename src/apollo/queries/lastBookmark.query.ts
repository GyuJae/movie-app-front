import { gql } from '@apollo/client'

export const LAST_BOOKMARK_QUERY = gql`
  query LastBookmark {
    lastBookmark {
      ok
      error
      bookmark {
        id
        mediaId
        mediaType
        posterPath
        title
      }
    }
  }
`

export interface ILastBookmarkBookmark {
  id: number
  mediaId: number
  mediaType: 'movie' | 'tv'
  posterPath: string
  title: string
}

export interface ILastBookmark {
  lastBookmark: {
    ok: boolean
    error: string | null
    bookmark: ILastBookmarkBookmark
  }
}
