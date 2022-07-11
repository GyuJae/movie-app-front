import { useRef } from 'react'
import { useClickAway } from 'react-use'
import styles from './form.module.scss'

interface IProps {
  inView: boolean
  handleClickCloseForm: () => void
}

const Form = ({ inView, handleClickCloseForm }: IProps) => {
  const formRef = useRef<HTMLDivElement>(null)
  useClickAway(formRef, handleClickCloseForm)
  if (!inView) return null
  return (
    <div className={styles.wrapper}>
      <div ref={formRef} className={styles.container}>
        <h3 className={styles.formTitle}>Comment</h3>
        <form className={styles.commentForm}>
          <textarea placeholder='What do you think?' />
          <button type='submit'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default Form
