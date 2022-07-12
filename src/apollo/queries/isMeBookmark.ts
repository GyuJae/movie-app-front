import { gql } from '@apollo/client'

export const IS_ME_BOOKMARK_QUERY = gql`
  query IsMeBookmark($input: IsMeBookmarkInput!) {
    isMeBookmark(input: $input) {
      isBookmarked
    }
  }
`

export interface IIsMeBookMarkOutput {
  isBookmarked: boolean
}

export interface IIsMeBookmark {
  isMeBookmark: IIsMeBookMarkOutput
}

export interface IIsMeBookmarkInput {
  mediaId: number
}

export interface IIsMeBookmarkVariables {
  input: IIsMeBookmarkInput
}
