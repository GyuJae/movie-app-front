import { useInfiniteMovies } from 'hooks/movies'
import { useMemo } from 'react'
import List from '../List'

interface IProps {
  inView: boolean
}

const Popular = ({ inView }: IProps) => {
  const { data } = useInfiniteMovies('popular')

  const Pages = useMemo(
    () => (data?.pages ? data.pages.map((pag) => <List key={pag.page} movies={pag.results} />) : null),
    [data?.pages]
  )

  if (!inView) return null
  return <div>{Pages}</div>
}

export default Popular
