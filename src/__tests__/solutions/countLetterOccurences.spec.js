const countLetterOccurences = require('../../solutions/countLetterOccurences');

describe('countLetterOccurences', () => {
  it('should be able to count the letter occurences in the word "aba"', () => {
    expect(countLetterOccurences('aba')).toEqual({ a: 2, b: 1 });
  });

  it('should be able to return an empty object literal for empty strings', () => {
    expect(countLetterOccurences('')).toEqual({});
  });
});
