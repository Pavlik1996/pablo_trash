const list = {
  one: "In progress",
  two: "Done",
  three: "To do",
};

function changeStatus(todo, status, obj) {
  obj[todo] = status;
}

function addTask(todo, status, obj) {
  obj[todo] = status;
}

function deleteTask(todo, obj) {
  delete obj[todo];
}

function showList(obj) {
  console.log("Todo:");
  count1 = 0;
  for (let key in list) {
    if (list[key] === "To do") {
      console.log(`\t${key}`);
      count1++;
    }
  }
  if (count1 == 0) {
    console.log(`\t${"-"}`);
  }
  console.log("Done:");
  count2 = 0;
  for (let key in list) {
    if (list[key] === "Done") {
      console.log(`\t${key}`);
      count2++;
    }
  }
  if (count2 == 0) {
    console.log(`\t${"-"}`);
  }
  console.log("In Progress:");
  count3 = 0;
  for (let key in list) {
    if (list[key] === "In Progress") {
      console.log(`\t${key}`);
      count3++;
    }
  }
  if (count3 == 0) {
    console.log(`\t${"-"}`);
  }
}

deleteTask("one", list);
changeStatus("two", "In progress", list);
addTask("six", "In Progress", list);
addTask("four", "To do", list);
showList(list);

// console.log("In Progress:");
// for (let key in list) {
//   if (list[key] === "In progress") {
//     console.log(`    ${[key]}`);
//   } else {
//     console.log(`    ${"-"}`);
//   }
// }
// console.log("Done:");
// for (let key in list) {
//   if (list[key] === "Done") {
//     console.log(`    ${[key]}`);
//   } else {
//     console.log(`    ${"-"}`);
//   }
// }

// console.log("Todo:");
// let counter = 0;
// for (let key in list) {
//   switch (list[key]) {
//     case "To do":
//       counter++;
//       console.log(counter);
//       console.log(`    ${[key]}`);
//       break;
//     default:
//       console.log(`    ${"-"}`);
//   }
// }

// console.log(`    ${list[key]}`);

// deleteTask("one", list);
// changeStatus("two", "bla", list);
// addTask("alo", "ktotam", list);
// console.log(list);

// const list = {
//   "create a new practice task": "In Progress",
//   "make a bed": "Done",
//   "write a post": "To Do",
// };

// function changeStatus(task, status, object) {
//   object[task] = status;
// }

// changeStatus("write a post", "Done", list);

// console.log("To do:");
//   for (let key in list) {
//     switch (list[key]) {
//       case "To do":
//         console.log(key);
//         break;
//       default:
//         console.log("-");
//     }
//     console.log("In progress:");
//     for (let key in list) {
//       switch (list[key]) {
//         case "In progress":
//           console.log(key);
//           break;
//         // default:
//         //   console.log("-");
//       }
//     }
//     console.log("Done:");
//     for (let key in list) {
//       switch (list[key]) {
//         case "Done":
//           console.log(key);
//           break;
//         // default:
//         //   console.log("-");
//       }
//     }
//   }
