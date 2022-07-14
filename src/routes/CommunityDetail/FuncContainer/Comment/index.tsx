import { useReactiveVar } from '@apollo/client'
import { isLoggedinVar } from 'apollo'
import { CommentIcon } from 'assets/svgs'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './comment.module.scss'
import Form from './Form'

const Comment = () => {
  const isLoggedin = useReactiveVar(isLoggedinVar)
  const navigate = useNavigate()
  const [openForm, setOpenForm] = useState<boolean>(false)
  const handleClickOpenForm = () => {
    if (!isLoggedin) {
      navigate('/login')
    }
    setOpenForm(true)
  }
  const handleClickCloseForm = () => setOpenForm(false)
  return (
    <>
      <button type='button' className={styles.commentButton} onClick={handleClickOpenForm}>
        <CommentIcon />
        Comment
      </button>
      <Form inView={openForm} handleClickCloseForm={handleClickCloseForm} />
    </>
  )
}

export default Comment
