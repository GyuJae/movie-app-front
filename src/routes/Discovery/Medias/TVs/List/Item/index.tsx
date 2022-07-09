import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ITV } from 'types/tv'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './item.module.scss'

interface IProps {
  tv: ITV
}

const Item = ({ tv }: IProps) => {
  const image = useMemo(
    () => (tv.poster_path ? <img alt={tv.name} src={getMediaImage({ path: tv.poster_path, format: 'w500' })} /> : null),
    [tv.poster_path, tv.name]
  )
  return (
    <Link to={`/tv/${tv.id}`} style={{ all: 'unset', cursor: 'pointer' }}>
      <li className={styles.item}>
        {image}
        <span>{tv.name}</span>
      </li>
    </Link>
  )
}

export default Item
