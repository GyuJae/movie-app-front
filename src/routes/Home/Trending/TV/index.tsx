import { useSearchParams } from 'react-router-dom'
import Today from './Today'

interface IProps {
  inView: boolean
}

const TV = ({ inView }: IProps) => {
  const [searchParams] = useSearchParams()
  const time = searchParams.get('time') || 'day'
  if (!inView) return null
  return (
    <>
      <Today inView={time === 'day'} />
      <Today inView={time === 'week'} />
    </>
  )
}

export default TV
