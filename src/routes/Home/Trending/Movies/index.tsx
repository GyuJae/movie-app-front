import { useSearchParams } from 'react-router-dom'
import Today from './Today'
import Week from './Week'

interface IProps {
  inView: boolean
}

const Movies = ({ inView }: IProps) => {
  const [searchParams] = useSearchParams()
  const time = searchParams.get('time') || 'day'

  if (!inView) return null
  return (
    <>
      <Today inView={time === 'day'} />
      <Week inView={time === 'week'} />
    </>
  )
}

export default Movies
