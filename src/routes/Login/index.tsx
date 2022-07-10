import { useMutation } from '@apollo/client'
import { ILoginMutation, ILoginMutationInput, ILoginoVariables, LOGIN_MUTATION } from 'apollo/mutations/login.mutation'
import { useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import styles from './login.module.scss'

const Login = () => {
  const navigate = useNavigate()
  const [mutate, { loading }] = useMutation<ILoginMutation, ILoginoVariables>(LOGIN_MUTATION, {
    onCompleted: ({ login: { ok } }) => {
      if (ok)
        navigate('/', {
          replace: true,
        })
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginMutationInput>({ mode: 'onChange' })

  const onSubmit: SubmitHandler<ILoginMutationInput> = (input) => {
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

  const passwordRequired = useMemo(
    () => errors.password?.type === 'required' && <span className={styles.error}>Password Required.</span>,
    [errors.password?.type]
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>Sign In</h3>
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
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' placeholder='Password' {...register('password', { required: true })} />
            {passwordRequired}
          </section>
          <button type='submit'>Log In</button>
        </form>
        <div className={styles.signupContainer}>
          <span>Not a member?</span>
          <Link to='/create-account' className={styles.link}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
