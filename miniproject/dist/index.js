"use strict";
let btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
const list = document.querySelector("ul");
//we make ! no nullish type assertion operator to tell typescript element is no null it's HTMLElement
const form = document.querySelector("form");
const todos = readTodos();
todos.forEach((todo) => {
    createTodo(todo);
});
function readTodos() {
    const todosString = localStorage.getItem("todos");
    if (todosString == null)
        return [];
    const todos = JSON.parse(todosString);
    return todos;
}
function handleSubmit(e) {
    e.preventDefault();
    const todo = { text: input.value, completed: false };
    todos.push(todo);
    setStorageTodo();
    createTodo(todo);
}
function setStorageTodo() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function createTodo(todo) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("click", () => {
        todo.completed = checkbox.checked;
        setStorageTodo();
    });
    li.append(todo.text);
    li.append(checkbox);
    list.append(li);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
// add event listener
// btn?.addEventListener("click", () => {
//   alert("cliked");
//   input.value = "";
// });
