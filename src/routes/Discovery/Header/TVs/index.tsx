import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { cx } from 'styles'
import Categories from './Categories'
import styles from './tvs.module.scss'

const TVs = () => {
  const [openCategories, setOpenCategories] = useState<boolean>(false)
  const [searchParams] = useSearchParams()
  const mediaType = searchParams.get('mediaType') || 'movie'
  const handleMouseEnter = () => setOpenCategories(true)
  const handleMouseLeave = () => setOpenCategories(false)
  return (
    <li className={cx(styles.item, { [styles.current]: mediaType === 'tv' })} onMouseEnter={handleMouseEnter}>
      TV Shows
      <AnimatePresence>
        <Categories inView={openCategories} handleMouseLeave={handleMouseLeave} />
      </AnimatePresence>
    </li>
  )
}

export default TVs
