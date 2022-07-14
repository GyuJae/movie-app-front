import { useMutation, useReactiveVar } from '@apollo/client'
import { isLoggedinVar } from 'apollo'
import { ILikeToggleMutation, ILikeToggleVariables, LIKE_TOGGLE_MUTATION } from 'apollo/mutations/likeToggle.mutation'
import { HeartIcon } from 'assets/svgs'
import { useIsLikePost } from 'hooks/posts'
import { useNavigate, useParams } from 'react-router-dom'
import { cx } from 'styles'
import styles from './heart.module.scss'

const Heart = () => {
  const { id } = useParams<Record<'id', string>>()
  const isLoggedIn = useReactiveVar(isLoggedinVar)
  const navigate = useNavigate()
  const { data } = useIsLikePost(id as string)
  const [mutate, { loading }] = useMutation<ILikeToggleMutation, ILikeToggleVariables>(LIKE_TOGGLE_MUTATION, {
    update(cache, { data: likeToggleData }) {
      if (likeToggleData?.likeToggle.ok) {
        cache.modify({
          id: 'ROOT_QUERY',
          fields: {
            isLikePost(prev) {
              return {
                ...prev,
                isLike: !prev.isLike,
              }
            },
          },
        })
        cache.modify({
          id: `PostDetailEntity:${id}`,
          fields: {
            _count(prev) {
              return {
                ...prev,
                likes: data?.isLikePost.isLike ? prev.likes - 1 : prev.likes + 1,
              }
            },
          },
        })
      }
    },
  })
  const handleClickLikeToggle = () => {
    if (loading) return
    if (!isLoggedIn) {
      navigate('/login')
      return
    }
    mutate({
      variables: {
        input: {
          postId: +(id as string),
        },
      },
    })
  }

  return (
    <button
      type='button'
      onClick={handleClickLikeToggle}
      className={cx(styles.heartButton, { [styles.isLikeButton]: data?.isLikePost.isLike || false })}
    >
      <HeartIcon /> Like
    </button>
  )
}

export default Heart
