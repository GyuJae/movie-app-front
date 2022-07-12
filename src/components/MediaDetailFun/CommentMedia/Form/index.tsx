import { useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useClickAway } from 'react-use'
import { cx } from 'styles'
import styles from './form.module.scss'
import StarVote from './StarVote'

interface IProps {
  inView: boolean
  handleClickCloseForm: () => void
}

interface IForm {
  text: string
  vote: number
}

const Form = ({ inView, handleClickCloseForm }: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  useClickAway(containerRef, handleClickCloseForm)

  const {
    register,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm<IForm>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<IForm> = (input) => {}

  const starVote = watch('vote')

  if (!inView) return null
  return (
    <div className={styles.formWrapper}>
      <div className={styles.container} ref={containerRef}>
        <h3>Comment</h3>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <textarea placeholder='Comment' {...register('text', { required: true, maxLength: 1000 })} />
          <div className={styles.buttonContainer}>
            <div className={styles.starVoteContainer}>
              <input
                type='range'
                min={0}
                max={5}
                step={0.5}
                className={styles.rangeInput}
                {...register('vote', { required: true, min: 0, max: 5 })}
              />
              <StarVote vote={starVote} />
            </div>
            <button type='submit' className={cx(styles.saveButton, { [styles.isValid]: isValid })}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
