const addTask = (taskList, taskText) => {
  if (taskText.trim() === "") return;
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  taskList.appendChild(taskItem);
  return taskItem;
};

test("addTask function adds a new task to the list", () => {
  document.body.innerHTML = '<ul id="task-list"></ul>';
  const taskList = document.getElementById("task-list");
  const taskText = "New Task";

  const taskItem = addTask(taskList, taskText);
  expect(taskList.children.length).toBe(1);
  expect(taskItem.textContent).toBe(taskText);
});

test("addTask function does not add empty task", () => {
  document.body.innerHTML = '<ul id="task-list"></ul>';
  const taskList = document.getElementById("task-list");
  const taskText = "";

  addTask(taskList, taskText);
  expect(taskList.children.length).toBe(0);
});
