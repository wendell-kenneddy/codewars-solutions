// Challenge: https://www.codewars.com/kata/52efefcbcdf57161d4000091

module.exports = (string) => {
  return string.split('').reduce((count, char) => {
    count[char] ? (count[char] += 1) : (count[char] = 1);

    return count;
  }, {});
};
