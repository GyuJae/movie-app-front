import TrendingsService from 'services/trendings.service'
import { useQuery } from 'react-query'

import { IMovieResult } from 'types/movie'
import { ITVResult } from 'types/tv'

const services = new TrendingsService()

export const useMovieDayTrendings = () => {
  return useQuery<IMovieResult, Error>(['trendins', 'movies', 'day'], () => services.getMoviesTrendings('day'))
}

export const useMovieWeekTrendings = () => {
  return useQuery<IMovieResult, Error>(['trendins', 'movies', 'week'], () => services.getMoviesTrendings('week'))
}

export const useTVDayTrendings = () => {
  return useQuery<ITVResult, Error>(['trendins', 'tvs', 'day'], () => services.getTVTrendings('day'))
}

export const useTVWeekTrendings = () => {
  return useQuery<ITVResult, Error>(['trendins', 'tvs', 'week'], () => services.getTVTrendings('week'))
}
