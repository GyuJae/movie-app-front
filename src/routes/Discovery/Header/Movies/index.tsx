import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { cx } from 'styles'
import Categories from './Categories'
import styles from './movies.module.scss'

const Movies = () => {
  const [openCategories, setOpenCategories] = useState<boolean>(false)
  const [searchParams] = useSearchParams()
  const mediaType = searchParams.get('mediaType') || 'movie'
  const handleMouseEnter = () => setOpenCategories(true)
  const handleMouseLeave = () => setOpenCategories(false)
  return (
    <li className={cx(styles.item, { [styles.current]: mediaType === 'movie' })} onMouseEnter={handleMouseEnter}>
      Movies
      <Categories inView={openCategories} handleMouseLeave={handleMouseLeave} />
    </li>
  )
}

export default Movies
