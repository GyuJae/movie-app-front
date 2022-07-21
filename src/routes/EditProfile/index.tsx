import { useMutation } from '@apollo/client'
import { EDIT_PROFILE_MUTATION, IEditProfilMutation, IEditProfilVariables } from 'apollo/mutations/editProfile.mutation'
import { ME_QUERY } from 'apollo/queries/me.query'
import { CameraIcon } from 'assets/svgs'
import { useMe } from 'hooks/useMe'
import { useEffect, useMemo, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { getAvatarUrl } from 'utils/getAvatarUrl'
import styles from './editProfile.module.scss'

interface IForm {
  username: string
  avatar?: FileList
}

const EditProfile = () => {
  const navigate = useNavigate()
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const { register, watch, handleSubmit, setValue } = useForm<IForm>()
  const avatarWatch = watch('avatar')
  const { data: meData } = useMe()
  const [editProfileMutate, { loading }] = useMutation<IEditProfilMutation, IEditProfilVariables>(
    EDIT_PROFILE_MUTATION,
    {
      onCompleted: (result) => {
        if (result.editProfile.ok) navigate(-1)
      },
      refetchQueries: [ME_QUERY],
    }
  )

  const onSubmit: SubmitHandler<IForm> = async ({ avatar, username }) => {
    if (loading) return
    if (avatar && avatar.length > 0) {
      const { id: avatarName, uploadURL } = await fetch(process.env.REACT_APP_IMAGE_URL!).then((resp) => resp.json())
      const form = new FormData()
      form.append('file', avatar[0], `${meData?.me.user.id || avatarName}`)
      const {
        result: { id },
      } = await fetch(uploadURL, {
        method: 'POST',
        body: form,
      }).then((res) => res.json())

      editProfileMutate({
        variables: {
          input: {
            avatar: id,
            username,
          },
        },
      })
    } else {
      editProfileMutate({
        variables: {
          input: {
            username,
          },
        },
      })
    }
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
    if (meData?.me.user.username) setValue('username', meData.me.user.username)
    if (meData?.me.user.avatar) setAvatarPreview(getAvatarUrl({ path: meData.me.user.avatar }))
  }, [meData?.me.user.avatar, meData?.me.user.username, setValue])

  useEffect(() => {
    if (avatarWatch && avatarWatch.length > 0) {
      const file = avatarWatch[0]
      setAvatarPreview(URL.createObjectURL(file))
    }
  }, [avatarWatch])

  const buttonPayload = loading ? 'loading...' : 'Save'

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
              {...register('username', { required: true })}
              autoComplete='off'
              placeholder='Username'
              className={styles.usernameInput}
            />
          </section>
          <button type='submit' className={styles.submitButton}>
            {buttonPayload}
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProfile
