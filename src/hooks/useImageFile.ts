import axios from 'axios'

export const useImageFile = () => {
  return axios.get('http://localhost:4000/imgFile')
}
