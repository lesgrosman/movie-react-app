export default function sortByParam(array, param) {
  let temp = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j][param] > array[i][param]) {
        temp = array[j]
        array[j] = array[i]
        array[i] = temp
      }
    }
  }
  return array
};
