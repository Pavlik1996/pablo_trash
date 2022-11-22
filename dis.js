const STATUS = ["In Progress", "To Do", "Done"];

const PRIORITY = ["low", "medium", "high"];

const list = [
  { name: "test", status: "Done", priority: "high", id: 2 },
  { name: "test", status: "Done", priority: "high", id: 3 },
  { name: "test", status: "Done", priority: "high", id: 4 },
];

// const deleteTask2 = (val) => list.find((item) => item.name == val);
// deleteTask2("test");

const deleteTask3 = list.find((item) => item.name == val);
const removeTask = (id) => {
  return list.filter((el) => el.id !== id);
};

deleteTask3(2);

// console.log(removeTask(1));
// let length = list.length;

// const addTask = (name) => {
//   return {
//     ...list,{
//     name: name,
//     status: STATUS["IN PROGRESS"],
//     priority: PRIORITY.MEDIUM,}
//   };
// // };

// console.log(addTask("hui"));

// console.log(list);
