let countId = 1;

const INPUTS = {
  HIGH: document.querySelector(".form_high"),
  LOW: document.querySelector(".form_low"),
  HIGH_INPUT: document.querySelector(".input-high"),
  LOW_INPUT: document.querySelector(".input-low"),
};

const STATUS = {
  IN_PROGRESS: "In progress",
  TO_DO: "To Do",
  DONE: "Done",
};

const PRIORITY = {
  LOW: "low",
  HIGH: "high",
};

let list = [{ name: "shop", status: STATUS.TO_DO, priority: PRIORITY.LOW }];

const addTaskHigh = (textTask, point) => {
  const label = document.createElement("label");
  const div = document.createElement("div");
  const input = document.createElement("input");
  const span = document.createElement("span");
  const button = document.createElement("button");
  div.className = "blokUs";
  input.type = "checkbox";
  input.id = countId;
  input.classList = "bbb";
  button.textContent = "x";
  button.classList = "buttonDelete";
  span.textContent = textTask;

  if (point === true) {
    document.body.firstElementChild.firstElementChild.append(div);
    div.append(label);
    label.append(input);
    label.append(span);
    div.append(button);
    countId++;
  } else {
    document.body.firstElementChild.lastElementChild.append(div);
    div.append(label);
    label.append(input);
    label.append(span);
    div.append(button);
    countId++;
  }
};

addTaskHigh(list[0].name, true);

let all = document.querySelector(".todoall");

all.addEventListener("click", (event) => {
  let lla = event.target.parentNode.firstChild.checked;
  let znach = event.target.parentNode.lastElementChild.textContent;
  if (lla === true) {
    changeStatusArr(znach, STATUS.DONE);
  } else {
    changeStatusArr(znach, STATUS.IN_PROGRESS);
  }
});

INPUTS.HIGH.addEventListener("submit", (event) => {
  event.preventDefault();
  addTaskHigh(INPUTS.HIGH_INPUT.value, true);
  addList(INPUTS.HIGH_INPUT.value, PRIORITY.HIGH);
  deleteTask();
  event.target.reset();
});

INPUTS.LOW.addEventListener("submit", (event) => {
  event.preventDefault();
  addTaskHigh(INPUTS.LOW_INPUT.value);
  addList(INPUTS.LOW_INPUT.value, PRIORITY.LOW);
  deleteTask();
  event.target.reset();
});

const changeStatusArr = (val, newStatus) => {
  list = list.map((el) =>
    el.name === val ? { ...el, status: newStatus } : el
  );
};

const deleteTask = () => {
  const buttonDelete = document.querySelectorAll(".buttonDelete");
  buttonDelete.forEach((el) => {
    el.onclick = () => {
      el.parentNode.remove();
      deleteTaskArr(el.parentNode.firstElementChild.lastChild.textContent);
    };
  });
};

const deleteTaskArr = (val) => {
  list = list.filter((el) => el.name !== val);
};

const addList = (val, pri) => {
  list = [
    ...list,
    {
      name: val,
      status: STATUS.IN_PROGRESS,
      priority: pri,
    },
  ];
};
