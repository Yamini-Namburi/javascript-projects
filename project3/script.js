document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    addButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
          const taskItem = document.createElement("li");
          taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          `;
          taskList.appendChild(taskItem);
          taskInput.value = "";
        }
      });
    
      taskList.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("edit")) {
          const newTaskText = prompt("Edit task:", target.previousElementSibling.textContent);
          if (newTaskText !== null) {
            target.previousElementSibling.textContent = newTaskText;
          }
        } else if (target.classList.contains("delete")) {
          target.parentElement.remove();
        }
      });
    });  

