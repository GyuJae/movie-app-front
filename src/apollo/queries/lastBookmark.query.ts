import { gql } from '@apollo/client'
import { IMediaSave } from 'types/mediaSave'

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

export interface ILastBookmarkBookmark extends IMediaSave {
  id: number
}

export interface ILastBookmark {
  lastBookmark: {
    ok: boolean
    error: string | null
    bookmark: ILastBookmarkBookmark
  }
}
