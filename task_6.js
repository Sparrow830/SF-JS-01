// Дан массив.
// Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех.
// Проверить, все ли элементы в массиве одинаковые.


const arr = [1, 2, 3, 4, 5];

let equality = true;
const sample = arr[0];

for (let item of arr) {
  if (item !== sample) {
    equality = false;
  }
}

console.log(equality);