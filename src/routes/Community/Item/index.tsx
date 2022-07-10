import { IReadPostsPost } from 'apollo/queries/readPosts.query'
import Avatar from 'components/Avatar'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './item.module.scss'

interface IProps {
  post: IReadPostsPost
}
const Item = ({ post }: IProps) => {
  return (
    <Link to={`${post.id}`} style={{ all: 'unset', width: '100%', cursor: 'pointer' }}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.userContainer}>
            <Avatar path={post.user.avatar} />
            <span>{post.user.username}</span>
            <span>{dayjs(post.createdAt).format('YYYY-MM-DD')}</span>
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
    </Link>
  )
}

export default Item
