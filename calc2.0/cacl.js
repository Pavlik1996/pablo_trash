let a = "";
let b = "";
let sing = "";
let finish = false;

const digit = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const action = ["-", "+", "x", "/", "%"];

const out = document.querySelector(".calc-display p");

function clear() {
  a = ""; // first number and result
  b = ""; // second number
  sign = ""; // знак
  finish = false;
  out.textContent = "0";
}

document.querySelector(".ac").onclick = clear;

document.querySelector(".buttons").onclick = (elem) => {
  const key = elem.target.textContent;
  if (digit.includes(key)) {
    a += key;
    out.textContent = a;
  }
  if (action.includes(key)) {
    sing += key;
    out.textContent = sing;
  }
  console.log(1);
};
