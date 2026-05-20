const inputElement = document.querySelector('.new-task-input');
const addTaskButton = document.querySelector('.new-task-button');
const taskContainer = document.querySelector('.tasks-container');

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return inputElement.classList.add('error');
  }

  const taskItemContainer = document.createElement('div');
  taskItemContainer.classList.add('task-item');

  const taskContent = document.createElement('p');
  taskContent.innerText = inputElement.value;

  taskContent.addEventListener('click', () => handleClick(taskContent))

  const deleteItem = document.createElement('i');
  deleteItem.classList.add('far', 'fa-trash-alt');

  deleteItem.addEventListener('click', () => handleDeleteClick(taskItemContainer))

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);

  taskContainer.appendChild(taskItemContainer);

  inputElement.value = '';

  updateLocalStorage();
}

const handleClick = (taskContent) => {
  const tasks = taskContainer.childNodes;

  for (const task of tasks) {
    if (task.firstChild.isSameNode(taskContent)) {
      task.firstChild.classList.toggle('completed');
    }
  }
}

const handleDeleteClick = (taskItemContainer) => {
  const tasks = taskContainer.childNodes;

  for (const task of tasks) {
    if (task.isSameNode(taskItemContainer)) {
      taskContainer.removeChild(task);
    }
  }
  updateLocalStorage();
}


const handleInputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement.classList.remove('error');
  }

};

const updateLocalStorage = () => {
  const tasks = taskContainer.childNodes;

  const localStorageTasks = [...tasks].map(task => {
    const content = task.firstChild;
    const isCompleted = content.classList.contains('completed');

    return { description: content.innerText, isCompleted };
  });

  localStorage.setItem('tasks', JSON.stringify(localStorageTasks));
}

const refreshTasksUsingLocalStorage = () => {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks')) || [];

  for (const task of tasksFromLocalStorage) {
    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const taskContent = document.createElement('p');
    taskContent.innerText = task.description;

    if (task.isCompleted) {
      taskContent.classList.add('completed');
    }

    taskContent.addEventListener('click', () => handleClick(taskContent))

    const deleteItem = document.createElement('i');
    deleteItem.classList.add('far', 'fa-trash-alt');

    deleteItem.addEventListener('click', () => handleDeleteClick(taskItemContainer))

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    taskContainer.appendChild(taskItemContainer);
  }
}

refreshTasksUsingLocalStorage();

addTaskButton.addEventListener('click', () => handleAddTask());
inputElement.addEventListener('input', () => handleInputChange());
