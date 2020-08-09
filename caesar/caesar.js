const caesar = function(str, key) {

  if (key < 0) return caesar(str, key + 26);
  let ans = '';

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90)  {
      ans += String.fromCharCode(((code - 65 + key) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      ans += String.fromCharCode(((code - 97 + key) % 26) + 97);
    } else {
      ans += str[i];
    }
  }

  return ans;
}

module.exports = caesar
