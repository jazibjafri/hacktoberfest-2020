/**
 * Return fibonacci sequence array
 * @param {int} n 
 * @returns {array} fibonacci sequence array
 */
const fibonacci = n => {
  let n1 = 0, n2 = 1, temp, sequence = []
  for (i = 1; i <= n; i++) {
    sequence.push (n1)
    temp = n1 + n2
    n1 = n2
    n2 = temp
  }
  return sequence
}
