import { feetsToMeters, kilogramsToPounds, metersToFeets, poundsToKilograms } from './conversion';

describe('Conversion utils', () => {
  describe('poundsToKilograms()', () => {
    it('should convert pounds to kilograms', () => {
      const testCases = [{
        lbs: 100,
        kgs: 45.359,
      }, {
        lbs: 15,
        kgs: 6.804,
      }, {
        lbs: -123,
        kgs: -55.792,
      }];

      testCases.forEach((testCase) => {
        expect(poundsToKilograms(testCase.lbs)).toBe(testCase.kgs)
      })
    })
  })

  describe('kilogramsToPounds()', () => {
    it('should convert kilograms to pounds', () => {
      const testCases = [{
        kgs: 45.359,
        lbs: 100,
      }, {
        kgs: 6.804,
        lbs: 15,
      }, {
        kgs: -55.792,
        lbs: -123,
      }];

      testCases.forEach((testCase) => {
        expect(kilogramsToPounds(testCase.kgs)).toBe(testCase.lbs)
      })
    })
  })

  describe('metersToFeets()', () => {
    it('should convert meters to feets', () => {
      const testCases = [{
        ms: 100,
        fts: 328.084,
      }, {
        ms: 15,
        fts: 49.213,
      }, {
        ms: -123,
        fts: -403.543,
      }];

      testCases.forEach((testCase) => {
        expect(metersToFeets(testCase.ms)).toBe(testCase.fts)
      })
    })
  })

  describe('feetsToMeters()', () => {
    it('should convert feets to meters', () => {
      const testCases = [{
        fts: 328.084,
        ms: 100,
      }, {
        fts: 49.213,
        ms: 15,
      }, {
        fts: -403.543,
        ms: -123,
      }];

      testCases.forEach((testCase) => {
        expect(feetsToMeters(testCase.fts)).toBe(testCase.ms)
      })
    })
  })
})