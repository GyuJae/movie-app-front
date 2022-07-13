import { TrashCanIcon } from 'assets/svgs'
import { useIsMineComment } from 'hooks/useIsMineComment'
import styles from './delete.module.scss'

interface IProps {
  commentId: number
}

const Delete = ({ commentId }: IProps) => {
  const { data, error } = useIsMineComment(commentId)
  console.log(data)
  if (!data || !data.isMineComment.isMine || error) return null
  return (
    <div className={styles.container}>
      <button type='button' className={styles.trashButton}>
        <TrashCanIcon className={styles.trashCanIcon} />
      </button>
    </div>
  )
}

export default Delete
