import { gql } from '@apollo/client'

export const READ_BOOKMARKS_QUERY = gql`
  query ReadBookmarks {
    readBookmarks {
      ok
      bookmarks {
        id
        mediaId
        mediaType
        posterPath
        releaseDate
        title
      }
    }
  }
`

export interface IReadBookMarksBookmark {
  id: number
  mediaId: number
  mediaType: 'movie' | 'tv'
  posterPath: string | null
  releaseDate: string
  title: string
}

export interface IReadBookmarksQuery {
  readBookmarks: {
    ok: boolean
    bookmarks: IReadBookMarksBookmark[]
  }
}
