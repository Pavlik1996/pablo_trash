const dash = "-";

const STATUS = ["In Progress", "To Do", "Done"];

const PRIORITY = ["low", "medium", "high"];

const list = [
  { name: "create a post", status: "In progress", priority: "low" },
  { name: "test", status: "Done", priority: "high" },
];

const changeStatus = (value, statusObj, priObj) => (
  (list[value].status = statusObj), (list[value].priority = priObj)
);

const addTask = (value, nameTask, priObj) => (
  list.push({}),
  (list[value].name = nameTask),
  (list[value].status = STATUS[0]),
  (list[value].priority = priObj)
);

// const deleteTask2 = (val) => list.find((item) => item.name == val);
// deleteTask2("test");
const deleteTask = (val, val1) => list.splice(val, val1);

function showList() {
  console.log(STATUS[1], ":");
  let flag = false;
  for (let key in list) {
    if (list[key].status === STATUS[1]) {
      flag = true;
      console.log("\t", list[key].name);
    }
  }
  if (flag == false) {
    console.log("\t", dash);
  }
  console.log(STATUS[0], ":");
  let flag1 = false;
  for (let key in list) {
    if (list[key].status === STATUS[0]) {
      flag1 = true;
      console.log("\t", list[key].name);
    }
  }
  if (flag1 == false) {
    console.log("\t", dash);
  }
  console.log(STATUS[2], ":");
  let flag2 = false;
  for (let key in list) {
    if (list[key].status === STATUS[2]) {
      flag2 = true;
      console.log("\t", list[key].name);
    }
  }
  if (flag2 == false) {
    console.log("\t", dash);
  }
  console.log("\n");
}
changeStatus(0, STATUS[1], PRIORITY[1]);
addTask(2, "pablo", PRIORITY[2]);
// deleteTask(1, 1);
showList();

console.log(list);
console.log(list.length);
