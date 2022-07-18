import { useMutation } from '@apollo/client'
import {
  ICreateAccountMutation,
  ICreateAccountInput,
  ICreateAccountVariables,
  CREATE_ACCOUNT_MUTATION,
} from 'apollo/mutations/createAccount.mutation'
import { useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import styles from './createAccount.module.scss'

const CreateAccount = () => {
  const navigate = useNavigate()
  const [mutate, { loading, data }] = useMutation<ICreateAccountMutation, ICreateAccountVariables>(
    CREATE_ACCOUNT_MUTATION,
    {
      onCompleted: ({ createAccount: { ok } }) => {
        if (ok)
          navigate('/login', {
            replace: true,
          })
      },
    }
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateAccountInput>({ mode: 'onChange' })

  const onSubmit: SubmitHandler<ICreateAccountInput> = (input) => {
    if (loading) return
    mutate({
      variables: {
        input: {
          ...input,
        },
      },
    })
  }

  const emailRequired = useMemo(
    () => errors.email?.type === 'required' && <span className={styles.error}>Email Required.</span>,
    [errors.email?.type]
  )

  const emailPattern = useMemo(
    () => errors.email?.type === 'pattern' && <span className={styles.error}>This is not email type.</span>,
    [errors.email?.type]
  )

  const usernameRequired = useMemo(
    () => errors.username?.type === 'required' && <span className={styles.error}>Username Required.</span>,
    [errors.username?.type]
  )

  const passwordRequired = useMemo(
    () => errors.password?.type === 'required' && <span className={styles.error}>Password Required.</span>,
    [errors.password?.type]
  )

  const buttonPayload = loading ? 'loading...' : 'Create Account'

  const mutateError = useMemo(
    () => data?.createAccount.error && <span className={styles.error}>{data.createAccount.error}</span>,
    [data?.createAccount.error]
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>Create Account</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              autoComplete='off'
              placeholder='Email'
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {emailRequired}
            {emailPattern}
          </section>
          <section>
            <label htmlFor='username'>Username</label>
            <input
              id='username'
              autoComplete='off'
              placeholder='test'
              {...register('username', {
                required: true,
              })}
            />
            {usernameRequired}
          </section>
          <section>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' placeholder='Password' {...register('password', { required: true })} />
            {passwordRequired}
          </section>
          <button type='submit'>{buttonPayload}</button>
        </form>
        <div className={styles.signupContainer}>
          <span>Already a member?</span>
          <Link to='/login' className={styles.link}>
            Log In
          </Link>
        </div>
        {mutateError}
      </div>
    </div>
  )
}

export default CreateAccount
