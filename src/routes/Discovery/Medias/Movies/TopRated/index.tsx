import { useInfiniteMovies } from 'hooks/movies'

interface IProps {
  inView: boolean
}
const TopRated = ({ inView }: IProps) => {
  const { data } = useInfiniteMovies('top_rated')
  if (!inView) return null
  return <div>TopRated</div>
}

export default TopRated
