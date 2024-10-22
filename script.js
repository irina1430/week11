const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

function addTask() {
  if (inputBox.value === "") {
    alert("Введите задачу!");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "X";
    li.appendChild(span);
  }
  inputBox.value = "";
}
list.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    } else if (event.target.tagName === "SPAN") {
      event.target.parentNode.remove();
    }
  },
  false
);
