"use strict";
const form = document.getElementById('form');
const input = document.getElementById('input');
const ul = document.querySelector("ul");
const todos = getTodosStorage();
function getTodosStorage() {
    const todosStorage = localStorage.getItem('todos');
    if (todosStorage === null) {
        return [];
    }
    const todos = JSON.parse(todosStorage);
    todos.forEach(todo => {
        addTodo(todo);
    });
    return todos;
}
function submitHandler(e) {
    e.preventDefault();
    const { value } = input;
    const todo = { value, checkbox: true };
    addTodo(todo);
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
function addTodo(todo) {
    const { value, checkbox = true } = todo;
    const liEl = document.createElement('li');
    const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';
    checkboxEl.checked = checkbox;
    liEl.textContent = value;
    //callabck function it's closure , remember it's lexical varaibles scope when it's called later !🚀👩‍🚀
    checkboxEl.addEventListener('click', () => {
        todos.forEach(todoItem => {
            if (todoItem == todo) {
                todo.checkbox = checkboxEl.checked;
                localStorage.setItem('todos', JSON.stringify(todos));
            }
        });
    });
    liEl.appendChild(checkboxEl);
    ul.appendChild(liEl);
    input.value = '';
}
form.addEventListener('submit', submitHandler);
