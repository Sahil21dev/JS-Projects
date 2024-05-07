document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("button");
  const taskField = document.getElementById("text");
  const taskList = document.getElementById("taskList");

  addButton.addEventListener("click", function () {
    const taskText = taskField.value.trim();
    if (taskText !== "") {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.innerHTML = `
                <input type="text" class="addedTask" value="${taskText}" readonly>
                <button class="editButton" "><i class="ri-pencil-fill" id="edit"></i></button>
                <button class="editButton" ><i class="ri-delete-bin-line" id="delete"></i></button>
            `;
      taskList.appendChild(taskElement);
      taskField.value = ""; // Clear input field after adding task
    }
  });

  taskList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.id === "edit") {
      const taskInput =
        target.parentElement.parentElement.querySelector('input[type="text"]');
      taskInput.removeAttribute("readonly");
      taskInput.focus();
    } else if (target.id === "delete") {
      const task = target.parentElement.parentElement;
      taskList.removeChild(task);
    }
  });
});
