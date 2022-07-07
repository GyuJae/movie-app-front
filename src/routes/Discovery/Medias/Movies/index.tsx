import { useSearchParams } from 'react-router-dom'
import NowPlaying from './NowPlaying'
import Popular from './Popular'
import TopRated from './TopRated'
import Upcoming from './Upcoming'

interface IProps {
  inView: boolean
}
const Movies = ({ inView }: IProps) => {
  const [searchParams] = useSearchParams()
  const cateogory = searchParams.get('category') || 'top_rated'
  if (!inView) return null
  return (
    <>
      <TopRated inView={cateogory === 'top_rated'} />
      <Popular inView={cateogory === 'popular'} />
      <Upcoming inView={cateogory === 'upcoming'} />
      <NowPlaying inView={cateogory === 'now_playing'} />
    </>
  )
}

export default Movies
