import TrendingsService from 'services/trendings.service'
import { useQuery } from 'react-query'

import { ITrendingResponse } from '../types/trending.d'
import { IMovieResult } from 'types/movie'

const services = new TrendingsService()

export const useMovieTrendings = (time: 'day' | 'week') => {
  return useQuery<IMovieResult, Error>(['trendins', 'movies', time], () => services.getMoviesTrendings(time))
}
export const useTVTrendings = (time: 'day' | 'week') => {
  return useQuery<ITrendingResponse, Error>(['trendins', 'tvs', time], () => services.getTVTrendings(time))
}
