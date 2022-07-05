import { useNavigate } from 'react-router-dom'
import { TMediaType } from 'types/trending'
import styles from './readNow.module.scss'

interface IProps {
  mediaType: TMediaType
  mediaId: number
}

const ReadNow = ({ mediaId, mediaType }: IProps) => {
  const navigate = useNavigate()
  const handleClick = () => navigate(`/${mediaType}/${mediaId}`)
  return (
    <button type='button' onClick={handleClick} className={styles.wrapper}>
      Read now
    </button>
  )
}

export default ReadNow
