import { useMutation } from '@apollo/client'
import {
  CREATE_BOOKMARK_MUTATION,
  ICreateBookmarkInput,
  ICreateBookmarkMutation,
  ICreateBookmarkVariables,
} from 'apollo/mutations/createBookmark.mutation'
import { BookmarkIcon } from 'assets/svgs'
import { useIsMeBookmark } from 'hooks/bookmarks'
import { cx } from 'styles'
import styles from './bookmarked.module.scss'

interface IProps {
  mediaInput: ICreateBookmarkInput
}

const Bookmarked = ({ mediaInput }: IProps) => {
  const [createBookmarkMutate, { loading }] = useMutation<ICreateBookmarkMutation, ICreateBookmarkVariables>(
    CREATE_BOOKMARK_MUTATION,
    {
      update(cache, { data: isBookmarkedData }) {
        if (isBookmarkedData?.createBookmark.ok) {
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
    }
  )

  const { data } = useIsMeBookmark(mediaInput.mediaId)

  const handleClickBookmark = () => {
    if (loading) return
    if (!data?.isMeBookmark.isBookmarked) {
      createBookmarkMutate({
        variables: {
          input: mediaInput,
        },
      })
    } else {
      console.log('DELETE')
    }
  }

  return (
    <button type='button' className={styles.wrapper} onClick={handleClickBookmark}>
      <BookmarkIcon className={cx(styles.bookmark, { [styles.isBookmarked]: !!data?.isMeBookmark.isBookmarked })} />
    </button>
  )
}

export default Bookmarked
