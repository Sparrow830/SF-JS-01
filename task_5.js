// Дан произвольный массив.
// Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.


let arr = [4, 8, 15, 16, 23, 42];

console.log(arr.length);

let result = arr.map(
  function(item, index, array) {
  return item
  }
)

console.log(arr);