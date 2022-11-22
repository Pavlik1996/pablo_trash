let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];

// возвращает массив, состоящий из двух первых пользователей

// 2

let someUsers = users.filter((item) => item.id < 3);

let res = users.filter(function (item) {
  return item.id < 3;
});

console.log(res.length);
console.log(someUsers.length);
