import { useMovie } from 'hooks/movies'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getMediaImage } from 'utils/getMediaImage'
import styles from './main.module.scss'

const Main = () => {
  const { id } = useParams<Record<'id', string>>()
  const { data } = useMovie(id as string)
  const backgroundImage = useMemo(
    () =>
      data?.backdrop_path ? (
        <img
          src={getMediaImage({ path: data.backdrop_path, format: 'original' })}
          alt={data.title}
          className={styles.backgroundImage}
        />
      ) : null,
    [data?.backdrop_path, data?.title]
  )
  const posterImage = useMemo(
    () =>
      data?.poster_path ? (
        <img
          src={getMediaImage({ path: data.poster_path, format: 'w1280' })}
          alt={data.title}
          className={styles.posterImage}
        />
      ) : null,
    [data?.poster_path, data?.title]
  )
  const genres = useMemo(
    () => (
      <ul className={styles.genres}>
        {data?.genres.map((genre) => (
          <li key={`${genre.name}-${genre.id}`}>{genre.name}</li>
        ))}
      </ul>
    ),
    [data?.genres]
  )
  if (!data) return <div className={styles.wrapper} />
  return (
    <>
      {backgroundImage}
      <div className={styles.contentContainer}>
        {posterImage}
        <div className={styles.descriptionContainer}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>{data.title}</h3>
            <div className={styles.subTitleContainer}>
              <h5>{data.release_date}</h5>
              {genres}
              <h5>{data.runtime}min</h5>
            </div>
          </div>
          <div className={styles.tagline}>
            <span>{data.tagline}</span>
          </div>
          <div className={styles.overview}>
            <span>{data.overview}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
