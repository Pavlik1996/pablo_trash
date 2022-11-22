let list = [
  { name: "create", status: "In progress", priority: "low" },
  { name: "test", status: "Done", priority: "high" },
  { name: "make", status: "To Do", priority: "medium" },
  { name: "shop", status: "To Do", priority: "low" },
];

const STATUS = {
  IN_PROGRESS: "In progress",
  TO_DO: "To Do",
  DONE: "Done",
};

const PRIORITY = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const changeStatus = (nameTask, newStatus) => {
  list = list.map((el) =>
    el.name == nameTask ? { ...el, status: newStatus } : el
  );
};

const addTask = (nameNewTask) => {
  list.push({
    name: nameNewTask,
    status: STATUS.IN_PROGRESS,
    priority: PRIORITY.HIGH,
  });
};

const deleteTask = (nameDeleteTask) => {
  list = list.filter((el) => el.name !== nameDeleteTask);
};

const showList = () => {
  for (let key in STATUS) {
    console.log(`${STATUS[key]}:`);
    const arr = list.filter((el) => el.status === STATUS[key]);
    arr.length > 0
      ? arr.forEach((el) => console.log(`\t ${el.name}`))
      : console.log(" \t -");
  }
};

changeStatus("make", STATUS.DONE);
changeStatus("shop", STATUS.DONE);

addTask("starada");
deleteTask("test");
showList();
