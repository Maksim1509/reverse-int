module.exports = function reverse (n) {
  const arr = n > 0 ? String(n).split('') : String(n).split('').slice(1);
  const reversed = arr.reverse();
  return Number(reversed.join(''));
}
