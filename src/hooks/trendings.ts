import TrendingsService from 'services/trendings.service'
import { useQuery } from 'react-query'

import { IMovieResult } from 'types/movie'
import { ITVResult } from 'types/tv'

const services = new TrendingsService()

export const useMovieTrendings = (time: 'day' | 'week') => {
  return useQuery<IMovieResult, Error>(['trendins', 'movies', time], () => services.getMoviesTrendings(time))
}
export const useTVTrendings = (time: 'day' | 'week') => {
  return useQuery<ITVResult, Error>(['trendins', 'tvs', time], () => services.getTVTrendings(time))
}
