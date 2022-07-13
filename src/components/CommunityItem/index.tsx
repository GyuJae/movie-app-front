import { IReadPostsPost } from 'apollo/queries/readPosts.query'
import Avatar from 'components/Avatar'
import dayjs from 'dayjs'
import { cx } from 'styles'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './communityItem.module.scss'

interface IProps {
  post: IReadPostsPost
  hoverBG?: boolean
}
const CommunityItem = ({ post, hoverBG = true }: IProps) => {
  return (
    <div className={cx(styles.wrapper, { [styles.hoverBG]: hoverBG })}>
      <div className={styles.container}>
        <div className={styles.userContainer}>
          <Avatar path={post.user.avatar} />
          <div className={styles.infoContainer}>
            <span>{post.user.username}</span>
            <span className={styles.createdAt}>{dayjs(post.createdAt).format('YYYY-MM-DD')}</span>
          </div>
        </div>
        <div className={styles.mediaContainer}>
          <span className={styles.mediaTitle}>{post.mediaTitle}</span>
        </div>
        <div>
          <span>{post.text}</span>
        </div>
        <div className={styles.countContainer}>
          <div>Likes {post._count.likes}</div>
          <div>Comments {post._count.comments}</div>
        </div>
      </div>
      <img
        className={styles.poster}
        alt={post.mediaTitle}
        src={getMediaImage({ path: post.posterPath, format: 'w300' })}
      />
    </div>
  )
}

export default CommunityItem
