import { IReadPostsPost } from 'apollo/queries/readPosts.query'
import CommunityItem from 'components/CommunityItem'
import { Link } from 'react-router-dom'

interface IProps {
  post: IReadPostsPost
}
const Item = ({ post }: IProps) => {
  return (
    <Link to={`${post.id}`} style={{ all: 'unset', width: '100%', cursor: 'pointer' }}>
      <CommunityItem post={post} />
    </Link>
  )
}

export default Item
