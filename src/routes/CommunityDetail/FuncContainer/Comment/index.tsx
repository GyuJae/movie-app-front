import { CommentIcon } from 'assets/svgs'
import { useState } from 'react'
import styles from './comment.module.scss'
import Form from './Form'

const Comment = () => {
  const [openForm, setOpenForm] = useState<boolean>(false)
  const handleClickOpenForm = () => setOpenForm(true)
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
