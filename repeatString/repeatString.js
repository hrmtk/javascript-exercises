const repeatString = function(str, num) {
  if (num < 0) {
    return 'ERROR'
  }

  let message = '';
  for (let i = 0; i < num; i++) {
    message += str;
  }
  return message;
}

module.exports = repeatString
