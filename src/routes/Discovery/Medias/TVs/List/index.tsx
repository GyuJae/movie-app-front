import { ITV } from 'types/tv'
import Item from './Item'
import styles from './list.module.scss'

interface IProps {
  tvs: ITV[]
}

const List = ({ tvs }: IProps) => {
  return (
    <ul className={styles.wrapper}>
      {tvs.map((tv, index) => {
        const key = `discovery-popular-tvs-${tv.id}-${index}`
        return <Item key={key} tv={tv} />
      })}
    </ul>
  )
}

export default List
