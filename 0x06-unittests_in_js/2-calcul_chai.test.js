const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

const TEST_CASES = [
  { type: 'SUM', a: 1.2, b: 3.7, expected: 5 },
  { type: 'SUM', a: 1, b: 3, expected: 4 },
  { type: 'SUM', a: 1, b: 4.5, expected: 6 },
  { type: 'SUM', a: 1.5, b: 3.7, expected: 6 },
  { type: 'SUM', a: 1.4, b: 3.2, expected: 4 },
  { type: 'SUBTRACT', a: 1.4, b: 4.5, expected: -4 },
  { type: 'SUBTRACT', a: 1.4, b: 3.2, expected: -2 },
  { type: 'SUBTRACT', a: 1.4, b: 1.4, expected: 0 },
  { type: 'SUBTRACT', a: 3.2, b: 1.4, expected: 2 },
  { type: 'DIVIDE', a: 1.4, b: 4.5, expected: 0.2 },
  { type: 'DIVIDE', a: 1.4, b: 0, expected: 'Error' },
  { type: 'DIVIDE', a: 1.4, b: 1.4, expected: 1 },
  { type: 'DIVIDE', a: 3.2, b: 1.4, expected: 3 },
  { type: 'DIVIDE', a: 0, b: 1.4, expected: 0 },
  { type: 'NOOP', a: 1.4, b: 4.5, expected: undefined },
];

describe('test 1-calcul module', function () {
  TEST_CASES.forEach(function (testCase) {
    it(`test calculateNumber with ${testCase.type} - ${testCase.a} and ${testCase.b}`, function () {
      expect(calculateNumber(testCase.type, testCase.a, testCase.b)).to.equal(
        testCase.expected,
      );
    });
  });
});
