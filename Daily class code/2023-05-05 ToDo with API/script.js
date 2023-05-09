const addButton = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const todoIsCompleted = document.getElementById("todo-isCompleted");
const errorDiv = document.querySelector(".error-msg");
const toDoLists = document.querySelector(".to-do-lists");
//https://dummyjson.com/todos
const getToDoLists = document.querySelector("#get-btn");
const tableBody = document.querySelector("#table-body");

let isChecked = false;

const onCheckboxClick = () => {
  isChecked = !isChecked; // !false
};

let allToDo = [];

addButton.addEventListener("click", () => {
  console.log("event", isChecked);
  let errorMsg = document.createElement("p");
  console.log("input", input.value);
  console.log("todoIsCompleted", todoIsCompleted);

  if (!input.value) {
    errorMsg.style.color = "red";
    errorMsg.innerHTML = `<br/> <strong>Please enter a valid ToDo.</strong>`;
    errorDiv.appendChild(errorMsg);
  } else {
    errorDiv.remove();

    fetch("https://dummyjson.com/todos/add", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: input.value,
        completed: isChecked,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        let liTag = document.createElement("li");
        liTag.innerHTML = `${res.todo}`;

        toDoLists.append(liTag);
        allToDo = [];

        // allToDo.push(res);
        allToDo.push({
          completed: res.completed,
          id: res.id,
          todo: res.todo,
          userId: res.userId,
        });

        for (let i = 0; i < allToDo.length; i++) {
          const trTag = document.createElement("tr");
          trTag.innerHTML = `
          <td>${i + 1}</td>
          <td>${allToDo[i].id}</td>
          <td>${allToDo[i].userId}</td>
          <td>${allToDo[i].todo}</td>
          <td>${allToDo[i].completed}</td>
          `;

          tableBody.append(trTag);
        }
      });
  }
});

getToDoLists.addEventListener("click", () => {
  console.log("get button clicked");
  fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((response) => {
      console.log("resposne", response.todos);
      allToDo = response.todos;

      for (let i = 0; i < allToDo.length; i++) {
        const trTag = document.createElement("tr");
        trTag.innerHTML = `
              <td>${i + 1}</td>
              <td>${allToDo[i].id}</td>
              <td>${allToDo[i].userId}</td>
              <td>${allToDo[i].todo}</td>
              <td>${allToDo[i].completed}</td>
              `;

        tableBody.append(trTag);
      }
    });
});
