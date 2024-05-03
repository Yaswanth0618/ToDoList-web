document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    function renderTasks() {
      taskList.innerHTML = "";
      tasks.forEach(function(task, index) {
        const li = document.createElement("li");
        li.textContent = task;
        li.innerHTML += `<button class="delete-btn" data-index="${index}">Delete</button>`;
        taskList.appendChild(li);
      });
    }
  
    renderTasks();
  
    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
        taskInput.value = "";
      }
    });
  
    taskList.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete-btn")) {
        const index = event.target.getAttribute("data-index");
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
      }
    });
  });
  