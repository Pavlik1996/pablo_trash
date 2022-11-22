const list = [
  { name: "create a post", status: "In progress", priority: "low", id: 1 },
  { name: "test", status: "Done", priority: "high", id: 2 },
  { name: "make", status: "To Do", priority: "medium", id: 3 },
];

const STATUS = {
  "IN PROGRESS": "In progress",
  "TO DO": "To Do",
  DONE: "Done",
};

const priority = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const changeStatus = (value) => {
  console.log(list.filter((item) => (item.id = value)));
};

changeStatus(2);
