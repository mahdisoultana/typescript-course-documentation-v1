let btn = document.getElementById("btn");
const input = document.getElementById("todoInput")! as HTMLInputElement;
const list = document.querySelector("ul")!;

//we make ! no nullish type assertion operator to tell typescript element is no null it's HTMLElement
const form = document.querySelector("form")!;

//here we have e=> event is known with the context of because its at a callback function
// form.addEventListener("submit", (e) => {
//   console.log("subimited");
//   e.preventDefault();
// });

//but we if we have this method

interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = readTodos();
todos.forEach((todo) => {
  createTodo(todo);
});
function readTodos(): Todo[] {
  const todosString = localStorage.getItem("todos");
  if (todosString == null) return [];
  const todos = JSON.parse(todosString);
  return todos;
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const todo: Todo = { text: input.value, completed: false };
  todos.push(todo);
  setStorageTodo();
  createTodo(todo);
}

function setStorageTodo(): void {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function createTodo(todo: Todo): void {
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
