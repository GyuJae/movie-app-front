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
  avatar: string | null
  email: string
  username: string
}

export interface ILastBookmark {
  lastBookmark: {
    ok: boolean
    error: string | null
    bookmark: ILastBookmarkBookmark
  }
}
