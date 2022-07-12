import { PencliIcon } from 'assets/svgs'
import { useState } from 'react'
import styles from './commentMedia.module.scss'
import Form from './Form'

const CommentMedia = () => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false)

  const handleClickOpenForm = () => setIsOpenForm(true)
  const handleClickCloseForm = () => setIsOpenForm(false)
  return (
    <button type='button' onClick={handleClickOpenForm} className={styles.wrapper}>
      <PencliIcon className={styles.pencli} />
      <Form inView={isOpenForm} handleClickCloseForm={handleClickCloseForm} />
    </button>
  )
}

export default CommentMedia
