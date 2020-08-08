const palindromes = function(str) {
  const string = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  const reverseStr =  string.split('').reverse().join('');
  return string == reverseStr;
}

module.exports = palindromes
