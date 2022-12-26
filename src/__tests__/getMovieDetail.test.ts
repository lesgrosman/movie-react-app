import { MovieDetailResponse } from 'utils/types'
import { fetchDetail } from 'pages/DetailPage/queries'
import { mockDetailMovieResponse } from '../__mocks__/movie.data'
import axios from 'axios'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Fetch movie detail', () => {
  const errorMessage = 'Network Error'
  it('should return movie detail', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockDetailMovieResponse })
    expect(mockedAxios.get).not.toHaveBeenCalled()
    const result = await fetchDetail<MovieDetailResponse>('255567', 'movie')
    expect(mockedAxios.get).toHaveBeenCalled()
    expect(result).toEqual(mockDetailMovieResponse)
  })

  it('fetches erroneously data from an API', async () => {
    mockedAxios.get.mockRejectedValue(new Error(errorMessage))
  })
})
