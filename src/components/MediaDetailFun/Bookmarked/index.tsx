import { useMutation } from '@apollo/client'
import {
  CREATE_BOOKMARK_MUTATION,
  ICreateBookmarkInput,
  ICreateBookmarkMutation,
  ICreateBookmarkVariables,
} from 'apollo/mutations/createBookmark.mutation'
import {
  DELETE_BOOKMARK_MUTATION,
  IDeleteBookmarkMutation,
  IDeleteBookmarkVariables,
} from 'apollo/mutations/deleteBookmark.mutation'
import { BookmarkIcon } from 'assets/svgs'
import { useIsMeBookmark } from 'hooks/bookmarks'
import { cx } from 'styles'
import styles from './bookmarked.module.scss'

interface IProps {
  mediaInput: ICreateBookmarkInput
}

const Bookmarked = ({ mediaInput }: IProps) => {
  const [createBookmarkMutate, { loading: createBookmarkLoading }] = useMutation<
    ICreateBookmarkMutation,
    ICreateBookmarkVariables
  >(CREATE_BOOKMARK_MUTATION, {
    update(cache, { data: createData }) {
      if (createData?.createBookmark.ok) {
        cache.modify({
          id: 'ROOT_QUERY',
          fields: {
            isMeBookmark() {
              return {
                isBookmarked: true,
              }
            },
          },
        })
      }
    },
  })

  const [delteBookmarkMutate, { loading: deleteBookmarkLoading }] = useMutation<
    IDeleteBookmarkMutation,
    IDeleteBookmarkVariables
  >(DELETE_BOOKMARK_MUTATION, {
    update(cache, { data: deleteData }) {
      if (deleteData?.deleteBookmark.ok) {
        cache.modify({
          id: 'ROOT_QUERY',
          fields: {
            isMeBookmark() {
              return {
                isBookmarked: false,
              }
            },
          },
        })
      }
    },
  })

  const { data } = useIsMeBookmark(mediaInput.mediaId)

  const handleClickBookmark = () => {
    if (createBookmarkLoading || deleteBookmarkLoading) return
    if (!data?.isMeBookmark.isBookmarked) {
      createBookmarkMutate({
        variables: {
          input: mediaInput,
        },
      })
    } else {
      delteBookmarkMutate({
        variables: {
          input: {
            mediaId: mediaInput.mediaId,
          },
        },
      })
    }
  }

  return (
    <button type='button' className={styles.wrapper} onClick={handleClickBookmark}>
      <BookmarkIcon className={cx(styles.bookmark, { [styles.isBookmarked]: !!data?.isMeBookmark.isBookmarked })} />
    </button>
  )
}

export default Bookmarked
