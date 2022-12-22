import { getGenres } from 'pages/DetailPage/utils'
import { mockGenres } from '__mocks__/common.data'

describe('Transform genres array into string', () => {
  test('correct transform', () => {
    expect(getGenres(mockGenres)).toEqual('Horror, Comedy')
  })

  test('return - if argument undefined', () => {
    expect(getGenres(undefined)).toEqual('-')
  })
})
