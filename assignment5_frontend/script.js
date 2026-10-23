const intro = document.getElementById("intro");
if (intro) {
  const name = "Beimzhan Otegen";
  const group = "SE-2528";
  const number = 10;
  const isStudent = true;
  const other = 5;
  console.log("Name:", name, "Group:", group);
  console.log("Variables:", name, number, isStudent);
  console.log("Arithmetic:", number + other, number - other, number * other, number / other);
  console.log("Concatenation:", name + " - " + group);
  alert("Hello World!");
}

const changeText = document.getElementById("changeText");
if (changeText) {
  changeText.addEventListener("click", () => {
    document.getElementById("message").textContent = "The paragraph text has changed!";
  });

  const styleBox = document.getElementById("styleBox");
  let colored = false;
  let large = false;
  document.getElementById("changeColor").addEventListener("click", () => {
    colored = !colored;
    styleBox.style.backgroundColor = colored ? "#bfdbfe" : "#f1f5f9";
  });
  document.getElementById("changeSize").addEventListener("click", () => {
    large = !large;
    styleBox.style.fontSize = large ? "24px" : "16px";
  });

  const list = document.getElementById("itemList");
  let itemNumber = 0;
  document.getElementById("addItem").addEventListener("click", () => {
    const item = document.createElement("li");
    item.textContent = "Item " + ++itemNumber;
    list.appendChild(item);
  });
  document.getElementById("removeItem").addEventListener("click", () => {
    if (list.lastElementChild) list.lastElementChild.remove();
  });
}

const hoverBox = document.getElementById("hoverBox");
if (hoverBox) {
  hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "#bfdbfe";
  });
  hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "#f1f5f9";
  });

  document.getElementById("liveInput").addEventListener("keyup", (event) => {
    document.getElementById("liveOutput").textContent = event.target.value;
  });

  document.getElementById("calculate").addEventListener("click", () => {
    const first = document.getElementById("firstNumber").value;
    const second = document.getElementById("secondNumber").value;
    const operation = document.getElementById("operation").value;
    const output = document.getElementById("result");
    if (first === "" || second === "") {
      output.textContent = "Please enter both numbers.";
      return;
    }
    const a = Number(first);
    const b = Number(second);
    if (operation === "/" && b === 0) {
      output.textContent = "Cannot divide by zero.";
      return;
    }
    let result;
    if (operation === "+") result = a + b;
    if (operation === "-") result = a - b;
    if (operation === "*") result = a * b;
    if (operation === "/") result = a / b;
    output.textContent = "Result: " + result;
  });
}

const todoForm = document.getElementById("todoForm");
if (todoForm) {
  const tasks = [];
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  function renderTasks() {
    taskList.replaceChildren();
    tasks.forEach((task, index) => {
      const item = document.createElement("li");
      if (task.done) item.classList.add("completed");
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.done;
      checkbox.addEventListener("change", () => {
        task.done = checkbox.checked;
        renderTasks();
      });
      const text = document.createElement("span");
      text.textContent = task.text;
      label.append(checkbox, text);
      const button = document.createElement("button");
      button.textContent = "Delete";
      button.className = "secondary";
      button.addEventListener("click", () => {
        tasks.splice(index, 1);
        renderTasks();
      });
      item.append(label, button);
      taskList.appendChild(item);
    });
  }

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = taskInput.value.trim();
    if (!text) return;
    tasks.push({ text, done: false });
    taskInput.value = "";
    renderTasks();
    taskInput.focus();
  });
}
