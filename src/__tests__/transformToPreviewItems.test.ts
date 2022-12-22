import { mockMovieItems, mockResponseMovieItems } from '__mocks__/movie.data'
import { transformToPreviewItems } from 'utils/helper'

describe('transform movie or tv item to preview', () => {
  test('correct mapping', () => {
    expect(transformToPreviewItems(mockResponseMovieItems)).toEqual(mockMovieItems)
  })

  test('should return empty array if argument is undefined', () => {
    expect(transformToPreviewItems(undefined)).toEqual([])
  })
})
