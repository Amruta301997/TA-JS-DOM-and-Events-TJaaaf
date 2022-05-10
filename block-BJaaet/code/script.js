
let inputText = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector("ul");

let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clear = document.querySelector(".clear");

let activeButton = "all";

let allMovies = localStorage.getItem('allMovies')
? JSON.parse(localStorage.getItem('allMovies')) 
: [];

function handleInput(event) {
  let value = event.target.value;
  if (event.keyCode === 13 && value !== "") {
    console.log(value);
    let todo = {
      name: value,
      isDone: false,
    };
    allMovies.push(todo);
    event.target.value = "";

    createUI();
    localStorage.setItem("allMovies",JSON.stringify(allMovies));
  }
}

function handleDelete(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  console.log(allMovies);
  createUI();
  localStorage.setItem("allMovies",JSON.stringify(allMovies));
}
function handleToggle(event) {
  let id = event.target.dataset.id;
  allMovies[id].isDone = !allMovies[id].isDone;
  createUI();
  localStorage.setItem("allMovies",JSON.stringify(allMovies));
}


function createUI(data = allMovies) {
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
  allMovies = allMovies.filter((todo) => !todo.isDone);
  createUI();
  localStorage.setItem("allMovies",JSON.stringify(allMovies));
  console.log(allMovies);
});

active.addEventListener("click", () => {
  let notCompleted = allMovies.filter((todo) => !todo.isDone);
  createUI(notCompleted);

  activeButton = "active";
  updateActiveBtn();
});

completed.addEventListener("click", () => {
    let completed = allMovies.filter((todo) => todo.isDone);
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
