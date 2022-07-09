import { useSearchParams } from 'react-router-dom'
import styles from './medias.module.scss'
import NowPlaying from './Movies/NowPlaying'
import PopularMovie from './Movies/Popular'
import TopRatedMovie from './Movies/TopRated'
import Upcoming from './Movies/Upcoming'
import AiringToday from './TVs/AiringToday'
import OnTheAir from './TVs/OnTheAir'
import PopularTV from './TVs/Popular'
import TopRatedTV from './TVs/TopRated'

const Medias = () => {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'top_rated'
  const categoryName =
    {
      top_rated: 'Top Rated',
      popular: 'Popular',
      upcoming: 'Upcoming',
      now_playing: 'Now Playing',
      airing_today: 'Airing Today',
      on_the_air: 'On The Air',
    }[categoryParam] || 'Media'
  const mediaType = searchParams.get('mediaType') || 'movie'
  return (
    <div className={styles.wrapper}>
      <h3>{categoryName}</h3>
      <div className={styles.mediaContainer}>
        <TopRatedTV inView={mediaType === 'tv' && categoryParam === 'top_rated'} />
        <PopularTV inView={mediaType === 'tv' && categoryParam === 'popular'} />
        <AiringToday inView={mediaType === 'tv' && categoryParam === 'airing_today'} />
        <OnTheAir inView={mediaType === 'tv' && categoryParam === 'on_the_air'} />
        <TopRatedMovie inView={mediaType === 'movie' && categoryParam === 'top_rated'} />
        <PopularMovie inView={mediaType === 'movie' && categoryParam === 'popular'} />
        <Upcoming inView={mediaType === 'movie' && categoryParam === 'upcoming'} />
        <NowPlaying inView={mediaType === 'movie' && categoryParam === 'now_playing'} />
      </div>
    </div>
  )
}

export default Medias
