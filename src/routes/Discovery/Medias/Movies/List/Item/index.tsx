import { opacityVariants } from 'animations'
import { AnimatePresence, motion } from 'framer-motion'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { IMovie } from 'types/movie'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './item.module.scss'

interface IProps {
  movie: IMovie
}

const Item = ({ movie }: IProps) => {
  const image = useMemo(
    () =>
      movie.poster_path ? (
        <img alt={movie.title} src={getMediaImage({ path: movie.poster_path, format: 'w500' })} />
      ) : null,
    [movie.poster_path, movie.title]
  )
  return (
    <AnimatePresence>
      <Link to={`/movie/${movie.id}`} style={{ all: 'unset', cursor: 'pointer' }}>
        <motion.li variants={opacityVariants} initial='initial' animate='animate' exit='exit' className={styles.item}>
          {image}
          <span>{movie.title}</span>
        </motion.li>
      </Link>
    </AnimatePresence>
  )
}

export default Item
