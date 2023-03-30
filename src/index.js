document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskList = document.getElementById('tasks');
    newTask = document.createElement('li');
    newTask.textContent = document.getElementById("create-task-form").elements['new-task-description'].value;
    taskList.append(newTask);
    event.target.reset();
  })
});
