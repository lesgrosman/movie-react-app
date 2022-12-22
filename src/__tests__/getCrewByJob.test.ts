import { getCrewByJob } from '../pages/DetailPage/utils'
import { mockCrewMembers } from '../__mocks__/common.data'

describe('Transform crew array into string of names', () => {
  test('get producers', () => {
    expect(getCrewByJob(mockCrewMembers, 'Producer')).toBe('John Doe, Johny Depp')
  })

  test('get directors', () => {
    expect(getCrewByJob(mockCrewMembers, 'Director')).toBe('Jack White')
  })

  test('return - if argument undefined', () => {
    expect(getCrewByJob(undefined, 'Director')).toBe('-')
  })

  test('argument is an empty array', () => {
    expect(getCrewByJob([], 'Director')).toBe('-')
  })
})
