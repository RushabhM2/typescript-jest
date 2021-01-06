import { Utils } from '../app/Utils'

describe('Utils test suite', () => {
  test('test to upper case', () => {
    const result = Utils.toUpperCase('abc')
    expect(result).toBe('ABC')
  })
})