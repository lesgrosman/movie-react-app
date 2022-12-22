import { MovieDetailResponse } from 'utils/types'
import { fetchDetail } from 'pages/DetailPage/queries'
import { mockDetailMovieResponse } from '../__mocks__/movie.data'
import axios from 'axios'

jest.mock('axios')

describe('Fetch movie detail', () => {
  const errorMessage = 'Network Error'
  it('should return movie detail', async () => {
    // eslint-disable-next-line prettier/prettier
    (axios.get as jest.Mock).mockImplementation(() => Promise.resolve({data: mockDetailMovieResponse}))
    await expect(fetchDetail<MovieDetailResponse>('255567', 'movie')).resolves.toEqual(
      mockDetailMovieResponse
    )
  })

  it('fetches erroneously data from an API', async () => {
    // eslint-disable-next-line prettier/prettier
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error(errorMessage))
    )
  })
})
