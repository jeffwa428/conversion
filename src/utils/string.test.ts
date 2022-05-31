import { capitalizeFirstLetter } from './string';

describe('String utils', () => {
  describe('capitalizeFirstLetter()', () => {
    it('should capitalize first letter', () => {
      const testCases = [{
        text: 'asdf',
        expected: 'Asdf',
      }, {
        text: 'CAPITAL',
        expected: 'CAPITAL',
      }, {
        text: '1Number',
        expected: '1Number',
      }, {
        text: '-1Number',
        expected: '-1Number',
      }];

      testCases.forEach((testCase) => {
        expect(capitalizeFirstLetter(testCase.text)).toBe(testCase.expected)
      })
    })
  })
})