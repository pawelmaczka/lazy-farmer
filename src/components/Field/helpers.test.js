import { getFieldLevel, getLevelTimestamp } from './helpers';

const GROWING_TIME = 60000;
const TIME_TO_ROT = 80000;

const testConfig = {
  cabbage: {
    growingTime: GROWING_TIME,
    timeToRot: TIME_TO_ROT,
    cropAmount: 4,
  },
};

describe('Field > helpers', () => {
  // these tests need more useful description
  describe('getLevelTimestamp', () => {
    it('returns null for level 0', () => {
      expect(getLevelTimestamp(0, 'cabbage', 1000, testConfig)).toEqual(null);
      expect(getLevelTimestamp(0, 'cabbage', 5000, testConfig)).toEqual(null);
    });

    it('returns null for level 1', () => {
      expect(getLevelTimestamp(1, 'cabbage', 1000, testConfig)).toEqual(null);
      expect(getLevelTimestamp(1, 'cabbage', 5000, testConfig)).toEqual(null);
    });

    it('it returns correct value for level 2', () => {
      expect(getLevelTimestamp(2, 'cabbage', 1000, testConfig)).toEqual(21000);
      expect(getLevelTimestamp(2, 'cabbage', 5000, testConfig)).toEqual(25000);
    });

    it('it returns correct value for level 3', () => {
      expect(getLevelTimestamp(3, 'cabbage', 1000, testConfig)).toEqual(41000);
      expect(getLevelTimestamp(3, 'cabbage', 5000, testConfig)).toEqual(45000);
    });

    it('it returns correct value for level 4', () => {
      expect(getLevelTimestamp(4, 'cabbage', 1000, testConfig)).toEqual(61000);
      expect(getLevelTimestamp(4, 'cabbage', 5000, testConfig)).toEqual(65000);
    });

    it('it returns correct value for level 5', () => {
      expect(getLevelTimestamp(5, 'cabbage', 1000, testConfig)).toEqual(141000);
      expect(getLevelTimestamp(5, 'cabbage', 5000, testConfig)).toEqual(145000);
    });
  });

  describe('getFieldLevel', () => {
    it('returns 0 if plantedAtTimestamp is null', () => {
      expect(getFieldLevel('cabbage', null, testConfig)).toEqual(0);
    });

    it('returns 1 if 1/3 of growingTime has not elapsed', () => {
      Date.now = jest.fn(() => 1010);
      expect(getFieldLevel('cabbage', 1000, testConfig)).toEqual(1);

      Date.now = jest.fn(() => +Math.round((1 / 3) * GROWING_TIME));
      expect(getFieldLevel('cabbage', 1000, testConfig)).toEqual(1);
    });

    it('returns 2 if 1/3 of growingTime elapsed but not more than 2/3', () => {
      Date.now = jest.fn(() => 1000 + Math.round((1 / 3) * GROWING_TIME));
      expect(getFieldLevel('cabbage', 1000, testConfig)).toEqual(2);

      Date.now = jest.fn(() => 1000 + Math.round((2 / 3) * GROWING_TIME) - 1);
      expect(getFieldLevel('cabbage', 1000, testConfig)).toEqual(2);
    });

    it('returns 3 if 2/3 of growingTime elapsed but not more than full growingTime', () => {
      Date.now = jest.fn(() => 1000 + Math.round((2 / 3) * GROWING_TIME));
      expect(getFieldLevel('cabbage', 1000, testConfig)).toEqual(3);

      Date.now = jest.fn(() => 1000 + GROWING_TIME - 1);
      expect(getFieldLevel('cabbage', 1000, testConfig)).toEqual(3);
    });

    it('returns 4 if growingTime elapsed but not more than full growingTime + TIME_TO_ROT', () => {
      Date.now = jest.fn(() => 1000 + GROWING_TIME);
      expect(getFieldLevel('cabbage', 1000, testConfig)).toEqual(4);

      Date.now = jest.fn(() => 1000 + GROWING_TIME + TIME_TO_ROT - 1);
      expect(getFieldLevel('cabbage', 1000, testConfig)).toEqual(4);
    });

    it('returns 5 if time elapsed is more or equal GROWING_TIME + TIME_TO_ROT', () => {
      Date.now = jest.fn(() => 1000 + GROWING_TIME + TIME_TO_ROT);
      expect(getFieldLevel('cabbage', 1000, testConfig)).toEqual(5);

      Date.now = jest.fn(() => 1000 + GROWING_TIME + TIME_TO_ROT + 5000);
      expect(getFieldLevel('cabbage', 1000, testConfig)).toEqual(5);
    });
  });
});
