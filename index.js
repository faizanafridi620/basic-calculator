let string = "";
let buttons = document.querySelectorAll(".btn");
let operators = document.querySelectorAll(".btn-method");
let buttonEqual = document.querySelector(".btn-equal");
let buttonDel = document.querySelector(".btn-DEL");
let buttonAc = document.querySelector(".btn-AC");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    string = string + e.target.innerHTML;
    document.querySelector("input").value = string;
  });
});

Array.from(operators).forEach((op) => {
  op.addEventListener("click", (e) => {
    string = string + e.target.innerHTML;
    document.querySelector("input").value = string;
  });
});

buttonAc.addEventListener("click", (e) => {
  string = "";
  document.querySelector("input").value = string;
});
buttonDel.addEventListener("click", (e) => {
  string = string.slice(0, -1);
  document.querySelector("input").value = string;
});
buttonEqual.addEventListener("click", (e) => {
  try {
    string = eval(string);
    document.querySelector("input").value = string;
  } catch (err) {
    document.querySelector("input").value = "Error";
  }
});
