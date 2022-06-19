document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");
  
  const addedtaskList = document.getElementById("tasks");

  
  newTaskForm.addEventListener("submit", addTask);
});

const addTask = event => {
  event.preventDefault();
  const description = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = description.value;

  appendTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
