// Создайте произвольный массив Map.
// Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// 
// Используйте шаблонные строки.


let myMap = new Map();
myMap.set("ABC", "string");
myMap.set(1, "number");
myMap.set(true, "boolean");
for (let name of myMap) {
  console.log(`Ключ - ${name[0]}, значение - ${name[1]}`);
}