import { useReactiveVar } from '@apollo/client'
import { isLoggedinVar } from 'apollo'
import { PencliIcon } from 'assets/svgs'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './commentMedia.module.scss'
import Form from './Form'

interface IProps {
  mediaInput: {
    mediaId: number
    mediaTitle: string
    mediaType: 'movie' | 'tv'
    posterPath: string
  }
}

const CommentMedia = ({ mediaInput }: IProps) => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false)
  const isLoggedIn = useReactiveVar(isLoggedinVar)
  const navigate = useNavigate()

  const handleClickOpenForm = () => {
    if (!isLoggedIn) {
      navigate('/login')
    }
    setIsOpenForm(true)
  }
  const handleClickCloseForm = () => setIsOpenForm(false)
  return (
    <button type='button' onClick={handleClickOpenForm} className={styles.wrapper}>
      <PencliIcon className={styles.pencli} />
      <Form inView={isOpenForm} handleClickCloseForm={handleClickCloseForm} mediaInput={mediaInput} />
    </button>
  )
}

export default CommentMedia
