import { CameraIcon } from 'assets/svgs'
import { useEffect, useMemo, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './editProfile.module.scss'

interface IForm {
  username?: string
  avatar?: FileList
}

const EditProfile = () => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const { register, watch, handleSubmit } = useForm<IForm>()
  const avatar = watch('avatar')

  const onSubmit: SubmitHandler<IForm> = (input) => {
    console.log(input)
  }

  const avatarImage = useMemo(
    () => (
      <div className={styles.avatarPreviewContainer}>
        {avatarPreview ? (
          <img alt='avatar-preview' src={avatarPreview} className={styles.avatarImage} />
        ) : (
          <CameraIcon />
        )}
      </div>
    ),
    [avatarPreview]
  )

  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0]
      setAvatarPreview(URL.createObjectURL(file))
    }
  }, [avatar])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>Edit Profile</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className={styles.avatarSection}>
            <label htmlFor='avatar' className={styles.avatar}>
              {avatarImage}
            </label>
            <input id='avatar' type='file' {...register('avatar')} accept='image/*' className={styles.hidden} />
          </section>

          <section className={styles.usernameSection}>
            <label htmlFor='usernmae'>Username</label>
            <input
              id='username'
              {...register('username')}
              autoComplete='off'
              placeholder='Username'
              className={styles.usernameInput}
            />
          </section>
          <button type='submit' className={styles.submitButton}>
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProfile
