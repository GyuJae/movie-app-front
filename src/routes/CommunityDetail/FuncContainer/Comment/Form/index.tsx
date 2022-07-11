import { useMutation } from '@apollo/client'
import {
  CREATE_COMMENT_MUTATION,
  ICreateCommentMutation,
  ICreateCommentVariables,
} from 'apollo/mutations/createComment.mutation'
import { READ_POST_DETAIL_QUERY } from 'apollo/queries/readPostDetail.query'
import { useMemo, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useClickAway } from 'react-use'
import { cx } from 'styles'
import styles from './form.module.scss'

interface IProps {
  inView: boolean
  handleClickCloseForm: () => void
}

interface IForm {
  comment: string
}

const Form = ({ inView, handleClickCloseForm }: IProps) => {
  const formRef = useRef<HTMLDivElement>(null)
  useClickAway(formRef, handleClickCloseForm)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid },
    watch,
  } = useForm<IForm>({
    mode: 'onChange',
  })

  const [createCommentMutate, { loading }] = useMutation<ICreateCommentMutation, ICreateCommentVariables>(
    CREATE_COMMENT_MUTATION,
    {
      onCompleted: () => {
        handleClickCloseForm()
        setValue('comment', '')
      },
      refetchQueries: [READ_POST_DETAIL_QUERY],
    }
  )

  const { id } = useParams<Record<'id', string>>()

  const onSubmit: SubmitHandler<IForm> = ({ comment }) => {
    if (loading) return
    createCommentMutate({
      variables: {
        input: {
          comment,
          postId: +(id as string),
        },
      },
    })
  }

  const buttonPayload = useMemo(() => (loading ? 'loading...' : 'Save'), [loading])
  const commentLength = watch('comment') ? watch('comment').length : 0

  if (!inView) return null
  return (
    <div className={styles.wrapper}>
      <div ref={formRef} className={styles.container}>
        <h3 className={styles.formTitle}>Comment</h3>
        <form className={styles.commentForm} onSubmit={handleSubmit(onSubmit)}>
          <textarea {...register('comment', { required: true, maxLength: 1000 })} placeholder='What do you think?' />
          <div className={styles.buttonContainer}>
            <span>{commentLength} / 1000</span>
            <button type='submit' className={cx({ [styles.isValid]: isValid })}>
              {buttonPayload}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
