import TVItem from 'components/MediaBasicItem/TV'
import { ITV } from 'types/tv'

interface IProps {
  tvs: ITV[]
}

const List = ({ tvs }: IProps) => {
  return (
    <>
      {tvs.map((tv) => {
        const key = `search-tv-${tv.id}`
        return <TVItem key={key} tv={tv} />
      })}
    </>
  )
}

export default List
