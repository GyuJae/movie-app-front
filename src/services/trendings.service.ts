import axios from 'axios'
import { IMovieResult } from 'types/movie'

import { ITVResult } from 'types/tv'

class TrendingsService {
  private apiURL: string
  private REACT_APP_MOVIE_API_KEY: string
  constructor() {
    this.apiURL = 'https://api.themoviedb.org/3/trending/'
    this.REACT_APP_MOVIE_API_KEY = process.env.REACT_APP_MOVIE_API_KEY as string
  }
  private makeApiCall = async <T>(apiPath: string): Promise<T> => {
    const response = await axios.get(`${this.apiURL}${apiPath}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    if (!response.data) {
      throw new Error(`Error from api call ${apiPath}: status=${response.status} ${response.statusText}`)
    }
    return response.data
  }

  public getMoviesTrendings = async (time: 'day' | 'week'): Promise<IMovieResult> => {
    const response = await this.makeApiCall<IMovieResult>(`movie/${time}?api_key=${this.REACT_APP_MOVIE_API_KEY}`)
    if (!response.results) {
      throw new Error('Trending not found')
    }
    return response
  }

  public getTVTrendings = async (time: 'day' | 'week'): Promise<ITVResult> => {
    const response = await this.makeApiCall<ITVResult>(`tv/${time}?api_key=${this.REACT_APP_MOVIE_API_KEY}`)
    if (!response.results) {
      throw new Error('Trending not found')
    }
    return response
  }
}

export default TrendingsService
