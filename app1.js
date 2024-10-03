const taskListEl = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTask");
const taskInputEl = document.getElementById("taskInput");

let tasks = [];

function renderTasks() {
    taskListEl.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskItemEl = document.createElement("li");
        taskItemEl.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Usuń";
        deleteBtn.onclick = () => {
            removeTask(index);
        }

        taskItemEl.appendChild(deleteBtn);
        taskListEl.appendChild(taskItemEl);
    });
}

function addTask() {
    const taskText = taskInputEl.value.trim();
    if (taskText) {
        tasks.push(taskText);
        taskInputEl.value = "";
        renderTasks();
    } else {
        alert("Proszę wpisać zadanie.")
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

addTaskBtn.addEventListener("click", addTask)