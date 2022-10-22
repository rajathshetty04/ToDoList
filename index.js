for (let index = 0; index < localStorage.length; index++) {
  let task = localStorage.getItem(localStorage.key(index));
  let taskBlock = document.createElement("div");
  taskBlock.innerHTML = task;
  taskBlock.classList.add("eachTask");

  let tasks = document.getElementById("tasks");
  tasks.appendChild(taskBlock);
}

let taskAdder = (task) => {
  let taskId = task;
  localStorage.setItem(taskId, task);
  let taskBlock = document.createElement("div");
  taskBlock.innerHTML = task;
  taskBlock.classList.add("eachTask");

  let tasks = document.getElementById("tasks");
  tasks.appendChild(taskBlock);
};

addButton.addEventListener("click", () => {
  let curTask = prompt("Enter the Task");
  if (curTask != null) taskAdder(curTask);
});
clearButton.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});
