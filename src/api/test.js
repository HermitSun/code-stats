import axios from 'axios'

export const test = async () => {
  let { data } = await axios.post('/test')
  return data
}
