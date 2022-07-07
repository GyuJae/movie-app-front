import { useInfiniteMovies } from 'hooks/movies'

interface IProps {
  inView: boolean
}
const NowPlaying = ({ inView }: IProps) => {
  const { data } = useInfiniteMovies('now_playing')
  if (!inView) return null
  return <div>NowPlaying</div>
}

export default NowPlaying
