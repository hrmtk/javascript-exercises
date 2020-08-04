const sumAll = function(x, y) {
  let sum = 0;
  if (Number.isInteger(x) && Number.isInteger(y) && x >= 0 && y >= 0) {
    const start = Math.min(x, y);
    const end = Math.max(x, y);
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  } else {
    return 'ERROR';
  }
  return sum;
}

module.exports = sumAll
