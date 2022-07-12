import { useReactiveVar } from '@apollo/client'
import { recentViewsVar } from 'apollo'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { IMediaSave } from 'types/mediaSave'
import { TMediaType } from 'types/trending'
import styles from './readNow.module.scss'

interface IProps {
  mediaType: TMediaType
  mediaId: number
  posterPath?: string
  title: string
}

const ReadNow = (props: IProps) => {
  const { mediaId, mediaType, posterPath, title } = props
  const navigate = useNavigate()
  const recentViews = useReactiveVar(recentViewsVar)

  const saveRecents = useCallback(
    (views: IMediaSave[]) => {
      const result = [{ mediaId, mediaType, posterPath, title }, ...views.slice(0, 20)]
      recentViewsVar(result)
      localStorage.setItem('recents', JSON.stringify(result))
    },
    [mediaId, mediaType, posterPath, title]
  )

  const handleClick = () => {
    if (!recentViews.map((i) => i.mediaId).includes(mediaId)) saveRecents(recentViews)
    else {
      const filterRecentViews = recentViews.filter((i) => i.mediaId !== mediaId)
      saveRecents(filterRecentViews)
    }
    navigate(`/${mediaType}/${mediaId}`)
  }
  return (
    <button type='button' onClick={handleClick} className={styles.wrapper}>
      Read now
    </button>
  )
}

export default ReadNow
