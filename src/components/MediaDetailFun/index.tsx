import { ICreateBookmarkInput } from 'apollo/mutations/createBookmark.mutation'
import Bookmarked from './Bookmarked'
import styles from './mediaDetailFun.module.scss'

interface IProps {
  mediaInput: ICreateBookmarkInput
}

const MediaDetailFun = ({ mediaInput }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <Bookmarked mediaInput={mediaInput} />
    </div>
  )
}

export default MediaDetailFun
