let addButton = document.querySelector("#todobtn");
let removeButton = document.querySelector("#removebtn");
let addList = document.querySelector("#list");
let todoInput = document.querySelector("#todoInput");
state = {
  todos: [],
};

function Todolist() {
  addList.innerHTML = "";
  state.todos.forEach((todo) => {
    const newList = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    newList.appendChild(checkbox);
    const todoText = document.createTextNode(todo.description);
    newList.appendChild(todoText);
    addList.appendChild(newList);
  });

  addButton.addEventListener("click", () => {
    const secondList = document.createElement("li");
    const checkbox2 = document.createElement("input");
    checkbox2.type = "checkbox";
    secondList.appendChild(checkbox2);

    let todoText = todoInput.value;
    if (todoText !== "") {
      state.todos.push({ description: todoText, done: false });
    }
    Todolist();
    todoInput.value = "";
  });
}

Todolist();

//checkbox.checked = todo.done;
