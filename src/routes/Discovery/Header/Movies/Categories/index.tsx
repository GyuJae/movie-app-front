import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './categories.module.scss'

interface IProps {
  inView: boolean
  handleMouseLeave: () => void
}

const Categories = ({ inView, handleMouseLeave }: IProps) => {
  const [, setSearchParams] = useSearchParams()
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
      setSearchParams({ mediaType: 'movie', category: e.currentTarget.value }),
    [setSearchParams]
  )
  const List = useMemo(
    () =>
      ['top_rated', 'popular', 'upcoming', 'now_playing'].map((item, index) => {
        const key = `movie-categories-${item}-${index}`
        const categoryName = {
          top_rated: 'Top Rated',
          popular: 'Popular',
          upcoming: 'Upcoming',
          now_playing: 'Now Playing',
        }[item]
        return (
          <li key={key}>
            <button type='button' onClick={handleClick} value={item}>
              {categoryName}
            </button>
          </li>
        )
      }),
    [handleClick]
  )

  if (!inView) return null
  return (
    <ul className={styles.wrapper} onMouseLeave={handleMouseLeave}>
      {List}
    </ul>
  )
}

export default Categories
