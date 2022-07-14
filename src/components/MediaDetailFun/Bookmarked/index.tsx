import { useMutation, useReactiveVar } from '@apollo/client'
import { isLoggedinVar } from 'apollo'
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
import { LAST_BOOKMARK_QUERY } from 'apollo/queries/lastBookmark.query'
import { READ_BOOKMARKS_QUERY } from 'apollo/queries/readBookmarks.query'
import { BookmarkIcon } from 'assets/svgs'
import { useIsMeBookmark } from 'hooks/bookmarks'
import { useNavigate } from 'react-router-dom'
import { cx } from 'styles'
import styles from './bookmarked.module.scss'

interface IProps {
  mediaInput: ICreateBookmarkInput
}

const Bookmarked = ({ mediaInput }: IProps) => {
  const isLoggedIn = useReactiveVar(isLoggedinVar)
  const naviate = useNavigate()
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
    refetchQueries: [READ_BOOKMARKS_QUERY, LAST_BOOKMARK_QUERY],
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
    refetchQueries: [READ_BOOKMARKS_QUERY, LAST_BOOKMARK_QUERY],
  })

  const { data } = useIsMeBookmark(mediaInput.mediaId)

  const handleClickBookmark = () => {
    if (!isLoggedIn) {
      naviate('/login')
      return
    }
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
