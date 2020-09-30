
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  if (matrix.length === 0) return [];
  matrix = matrix.map((el, index) => {
    if (index % 2 === 0) {
      return el.sort((a,b) => a-b)
    } else {
      return el.sort((a,b) => b-a)
    }
  })
  return matrix.flat()
}
