
let inputText = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector("ul");

let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clear = document.querySelector(".clear");

let activeButton = "all";

let todos = localStorage.getItem('todos')
? JSON.parse(localStorage.getItem('todos')) 
: [];

function handleInput(event) {
  let value = event.target.value;
  if (event.keyCode === 13 && value !== "") {
    console.log(value);
    let todo = {
      name: value,
      isDone: false,
    };
    todos.push(todo);
    event.target.value = "";

    createUI();
    localStorage.setItem("todos",JSON.stringify(todos));
  }
}

function handleDelete(event) {
  let id = event.target.dataset.id;
  todos.splice(id, 1);
  console.log(todos);
  createUI();
  localStorage.setItem("todos",JSON.stringify(todos));
}
function handleToggle(event) {
  let id = event.target.dataset.id;
  todos[id].isDone = !todos[id].isDone;
  createUI();
  localStorage.setItem("todos",JSON.stringify(todos));
}


function createUI(data = todos) {
  rootElm.innerHTML = "";
  data.forEach((todo, index) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("input", handleToggle);
    input.checked = todo.isDone;
    input.setAttribute("data-id", index);
    input.id = index;
    let label = document.createElement("label");
    label.for = "checkbox";
    label.innerText = todo.name;
    let span = document.createElement("span");
    span.innerText = "❌";
    span.setAttribute("data-id", index);
    span.addEventListener("click", handleDelete);
    li.append(input, label, span);

    rootElm.append(li);
  });
}
createUI();

clear.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.isDone);
  createUI();
  localStorage.setItem("todos",JSON.stringify(todos));
  console.log(todos);
});

active.addEventListener("click", () => {
  let notCompleted = todos.filter((todo) => !todo.isDone);
  createUI(notCompleted);

  activeButton = "active";
  updateActiveBtn();
});

completed.addEventListener("click", () => {
    let completed = todos.filter((todo) => todo.isDone);
    createUI(completed);
  
    activeButton = "completed";
    updateActiveBtn();
  });


  all.addEventListener("click", () => {
    createUI();
  
    activeButton = "all";
    updateActiveBtn();
  });

function updateActiveBtn(btn = activeButton) {
  all.classList.remove("selected");
  active.classList.remove("selected");
  completed.classList.remove("selected");
  if (btn == "all") {
    all.classList.add("selected");
  }
  if (btn == "active") {
    active.classList.add("selected");
  }
  if (btn == "completed") {
    completed.classList.add("selected");
  }
}
updateActiveBtn();
inputText.addEventListener("keyup", handleInput);
