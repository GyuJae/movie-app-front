import { useMutation } from '@apollo/client'
import { CREATE_POST_MUTATION, ICreatePostMutation, ICreatePostVariables } from 'apollo/mutations/createPost.mutation'
import { READ_POSTS_QUERY } from 'apollo/queries/readPosts.query'
import { useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useClickAway } from 'react-use'
import { cx } from 'styles'
import styles from './form.module.scss'
import StarVote from './StarVote'

interface IProps {
  inView: boolean
  handleClickCloseForm: () => void
  mediaInput: {
    mediaId: number
    mediaTitle: string
    mediaType: 'movie' | 'tv'
    posterPath: string
  }
}

interface IForm {
  text: string
  vote: number
}

const Form = ({ inView, handleClickCloseForm, mediaInput }: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  useClickAway(containerRef, handleClickCloseForm)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid },
    watch,
  } = useForm<IForm>({
    mode: 'onChange',
  })

  const [createPostMutate, { loading }] = useMutation<ICreatePostMutation, ICreatePostVariables>(CREATE_POST_MUTATION, {
    refetchQueries: [READ_POSTS_QUERY],
  })

  const onSubmit: SubmitHandler<IForm> = (input) => {
    if (loading) return
    createPostMutate({
      variables: {
        input: {
          ...mediaInput,
          ...input,
        },
      },
    })
    setValue('text', '')
    handleClickCloseForm()
  }

  const starVote = watch('vote')

  const buttonPayload = loading ? 'loading...' : 'Save'

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
                {...register('vote', { required: true, min: 0, max: 5, valueAsNumber: true })}
              />
              <StarVote vote={starVote} />
            </div>
            <button type='submit' className={cx(styles.saveButton, { [styles.isValid]: isValid })}>
              {buttonPayload}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
