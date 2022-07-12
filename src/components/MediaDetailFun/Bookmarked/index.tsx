import { useMutation } from '@apollo/client'
import {
  CREATE_BOOKMARK_MUTATION,
  ICreateBookmarkInput,
  ICreateBookmarkMutation,
  ICreateBookmarkVariables,
} from 'apollo/mutations/createBookmark.mutation'
import { BookmarkIcon } from 'assets/svgs'
import styles from './bookmarked.module.scss'

interface IProps {
  mediaInput: ICreateBookmarkInput
}

const Bookmarked = ({ mediaInput }: IProps) => {
  const [createBookmarkMutate, { loading }] = useMutation<ICreateBookmarkMutation, ICreateBookmarkVariables>(
    CREATE_BOOKMARK_MUTATION
  )

  const handleClickBookmark = () => {
    if (loading) return
    createBookmarkMutate({
      variables: {
        input: mediaInput,
      },
    })
  }
  return (
    <button type='button' className={styles.wrapper} onClick={handleClickBookmark}>
      <BookmarkIcon className={styles.bookmark} />
    </button>
  )
}

export default Bookmarked
