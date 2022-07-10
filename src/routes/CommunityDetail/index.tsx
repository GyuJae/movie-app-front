import CommunityItem from 'components/CommunityItem'
import { useReadPostDetail } from 'hooks/communities'
import { useParams } from 'react-router-dom'
import Comments from './Comments'
import styles from './communityDetail.module.scss'
import FuncContainer from './FuncContainer'

const CommunityDetail = () => {
  const { id } = useParams<Record<'id', string>>()
  const { data } = useReadPostDetail(id as string)
  if (!data?.readPostDetail.post) return null
  return (
    <div className={styles.wrapper}>
      <CommunityItem post={data?.readPostDetail.post} hoverBG={false} />
      <FuncContainer />
      <Comments comments={data.readPostDetail.post.comments} />
    </div>
  )
}

export default CommunityDetail
