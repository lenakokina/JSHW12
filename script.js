
const newTodoTemplate = document.getElementById('newTodoTemplate').innerHTML; //script
const listEl = document.getElementById('list'); //div

const inputField = document.getElementById('inputEnter'); // input

const button = document.getElementById('myBtn'); //button
let todoList = [];

button.addEventListener('click', onAddTodoBtnClick);
// inputField.addEventListener('keydown', (e) => console.log(e));

  // const insertedElement = listEl.children[listEl.children.length - 1];
  // insertedElement.addEventListener('click', onListClick);
  listEl.addEventListener('click', onListClick);
// init();

function onAddTodoBtnClick() {  
  if (isInputValid(inputField.value)) {
  const newTodo = getDataTodoList();
    addTodo(newTodo);
    resetForm();
  }
}

  function onListClick(e) {
    if (e.target.classList.contains('todo-item')) {
      toggleListElement(e.target);
    } 
    if (e.target.classList.contains('delete-btn')) {
      const todoId = getTodoId(e.target);
      removeListElement(todoId);
    }
  }

  function getTodoId(el) {
    const row = el.closest('.todo-item');
    return +row.dataset.todoId;

  }

  function toggleListElement(el) {
    el.classList.toggle('done');
  }

function isInputValid(str) {
  return str.trim() !== '';// trim убирает пробелы
}

function removeListElement(id) {
todoList = todoList.filter((item) => item.id !== id);
renderTodoLists(todoList);
}

function addTodo(title) {
  todoList.push(title);
   renderTodoLists(todoList);
}

function renderTodoLists(list) {
  listEl.innerHTML = '';
  list.forEach((item) => renderTodoList(item));
}


function renderTodoList(title) {
  const newTodoHtml = getNewTodoTemplate(title);

  listEl.insertAdjacentHTML('beforeend', newTodoHtml);
}


function getNewTodoTemplate(title) { 
return newTodoTemplate.replace('{{id}}', title.id)
                      .replace('{{title}}',title.title);
                    }

function getDataTodoList() {
  return {
    id: Date.now(),
    title: inputField.value,
  };
}

function resetForm() {
  inputField.value = '';
}



 