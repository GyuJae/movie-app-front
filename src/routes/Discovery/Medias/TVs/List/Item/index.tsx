import { useMemo } from 'react'
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
    <li className={styles.item}>
      {image}
      <span>{tv.name}</span>
    </li>
  )
}

export default Item
