const dash = "-";

const STATUS = {
  "IN PROGRESS": "In Progress",
  TODO: "To Do",
  DONE: "Done",
};

const PRIORITY = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const list = [
  { name: "create a post", status: "In progress", priority: "low" },
  { name: "test", status: "Done", priority: "high" },
];

const changeStatus = (value, statusObj, priObj) => {
  (list[value].status = statusObj), (list[value].priority = priObj);
};

const addTask = (value, nameTask, priObj, id) => {
  list.push({}),
    (list[value].name = nameTask),
    (list[value].status = STATUS["IN PROGRESS"]),
    (list[value].priority = priObj),
    (list[value].id = id);
};

const deleteTask = (val, val1) => list.splice(val, val1);

function showList() {
  console.log(STATUS.TODO, ":");
  let flag = false;
  for (let key in list) {
    if (list[key].status === STATUS.TODO) {
      flag = true;
      console.log("\t", list[key].name);
    }
  }
  if (flag == false) {
    console.log("\t", dash);
  }
  console.log(STATUS["IN PROGRESS"], ":");
  let flag1 = false;
  for (let key in list) {
    if (list[key].status === STATUS["IN PROGRESS"]) {
      flag1 = true;
      console.log("\t", list[key].name);
    }
  }
  if (flag1 == false) {
    console.log("\t", dash);
  }
  console.log(STATUS.DONE, ":");
  let flag2 = false;
  for (let key in list) {
    if (list[key].status === STATUS.DONE) {
      flag2 = true;
      console.log("\t", list[key].name);
    }
  }
  if (flag2 == false) {
    console.log("\t", dash);
  }
  console.log("\n");
}
changeStatus(0, STATUS.TODO, PRIORITY.MEDIUM);
addTask(2, "pablo", PRIORITY.HIGH, list.length + 1);
deleteTask(1, 1);
showList();

console.log(list);
console.log(list.length);
