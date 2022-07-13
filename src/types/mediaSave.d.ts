export interface IMediaSave {
  mediaId: number
  mediaType: 'movie' | 'tv'
  posterPath?: string | null
  title: string
}
