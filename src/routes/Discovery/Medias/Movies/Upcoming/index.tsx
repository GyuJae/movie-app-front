import { useInfiniteMovies } from 'hooks/movies'

interface IProps {
  inView: boolean
}
const Upcoming = ({ inView }: IProps) => {
  const { data } = useInfiniteMovies('upcoming')
  if (!inView) return null
  return <div>Upcoming</div>
}

export default Upcoming
