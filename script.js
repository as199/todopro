
const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
}

function dragEnd(e) {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  let todoStatus = e.target.parentElement.id;
  let idTodo = e.target.children[0].id;
  setStatusTodo(idTodo, todoStatus);
}

all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
  //   console.log("dragOver");
}

function dragEnter() {
  this.style.border = "1px dashed #ccc";
}

function dragLeave() {
  this.style.border = "none";
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
}

/* modal */
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

/* create todo  */
const todo_submit = document.getElementById("todo_submit");

todo_submit.addEventListener("click", createTodo);

function createTodo() {
  const todo_div = document.createElement("div");
  const input_val = document.getElementById("todo_input").value;
  const txt = document.createTextNode(input_val);
  let id =  saveTodo(input_val);
  todo_div.appendChild(txt);
  todo_div.classList.add("todo");
  todo_div.setAttribute("draggable", "true");

  /* create span */
  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);
  span.setAttribute("id", id);
  span.setAttribute('onClick',`deleteTodo(${id})`)
  todo_div.appendChild(span);
  no_status.appendChild(todo_div);
  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);

  document.getElementById("todo_input").value = "";
  todo_form.classList.remove("active");
  overlay.classList.remove("active");
}

// const close_btns = document.querySelectorAll(".close");

// close_btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     //btn.parentElement.style.display = "none";
//   });
// });

/* CHARGER LES TODOS AU CHARGEMENT DE LE PAGE */

window.addEventListener('load', getTodos);
function getTodos()
{
    let todos;
    let todo_div;
    let txt;
    let span;
    let span_tx;
    if(localStorage.getItem('todos') === null){
        todos=[];
    }else{
        todos =JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach((item)=>{
    switch (item.status) {
        case 'New':
             todo_div = document.createElement("div");
             txt = document.createTextNode(item.title);
            todo_div.appendChild(txt);
            todo_div.classList.add("todo");
            todo_div.setAttribute("draggable", "true");

            /* create span */
             span = document.createElement("span");
             span_txt = document.createTextNode("\u00D7");
            span.classList.add("close");
            span.appendChild(span_txt);
            span.setAttribute("id", item.id);
            span.setAttribute('onclick',`deleteTodo(${item.id})`)
            todo_div.appendChild(span);
            no_status.appendChild(todo_div);
            span.addEventListener("click", () => {
                span.parentElement.style.display = "none";
            });
            todo_div.addEventListener("dragstart", dragStart);
            todo_div.addEventListener("dragend", dragEnd);
            break;
        case 'started':
             todo_div = document.createElement("div");
             txt = document.createTextNode(item.title);
            todo_div.appendChild(txt);
            todo_div.classList.add("todo");
            todo_div.setAttribute("draggable", "true");

            /* create span */
             span = document.createElement("span");
             span_txt = document.createTextNode("\u00D7");
            span.classList.add("close");
            span.appendChild(span_txt);
            span.setAttribute("id", item.id);
            span.setAttribute('onclick',`deleteTodo(${item.id})`)
            todo_div.appendChild(span);
            started.appendChild(todo_div);
            span.addEventListener("click", () => {
                span.parentElement.style.display = "none";
            });
            todo_div.addEventListener("dragstart", dragStart);
            todo_div.addEventListener("dragend", dragEnd);
            break;
        case 'inProgress':
             todo_div = document.createElement("div");
             txt = document.createTextNode(item.title);
            todo_div.appendChild(txt);
            todo_div.classList.add("todo");
            todo_div.setAttribute("draggable", "true");

            /* create span */
             span = document.createElement("span");
             span_txt = document.createTextNode("\u00D7");
            span.classList.add("close");
            span.appendChild(span_txt);
            span.setAttribute("id", item.id);
            span.setAttribute('onclick',`deleteTodo(${item.id})`)
            todo_div.appendChild(span);
            inProgress.appendChild(todo_div);
            span.addEventListener("click", () => {
                span.parentElement.style.display = "none";
            });
            todo_div.addEventListener("dragstart", dragStart);
            todo_div.addEventListener("dragend", dragEnd);
            break;
        case 'completed':
             todo_div = document.createElement("div");
             txt = document.createTextNode(item.title);
            todo_div.appendChild(txt);
            todo_div.classList.add("todo");
            todo_div.setAttribute("draggable", "true");

            /* create span */
             span = document.createElement("span");
             span_txt = document.createTextNode("\u00D7");
            span.classList.add("close");
            span.appendChild(span_txt);
            span.setAttribute("id", item.id);
            span.setAttribute('onclick',`deleteTodo(${item.id})`)
            todo_div.appendChild(span);
            completed.appendChild(todo_div);
            span.addEventListener("click", () => {
                span.parentElement.style.display = "none";
            });
            todo_div.addEventListener("dragstart", dragStart);
            todo_div.addEventListener("dragend", dragEnd);
            break;
    }
    });
}

/* SAVE , UPDATE STATUS, DELETE TO LOCALSTORAGE */
function saveTodo(todo){
    let todos;
    if(localStorage.getItem('todos')=== null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    let newTodo = {
        id: uniqueId(),
        title: todo,
        status: 'New'
    }
    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos))
    return newTodo.id;
}

function setStatusTodo(Idtodo, status){
    let todos = JSON.parse(localStorage.getItem('todos'));
    let todo = []
    todos.forEach((item)=>{
        if(item.id === Idtodo){
            item.status = status;
        }
        todo.push(item);
    })
    localStorage.setItem('todos', JSON.stringify(todo))
}

function deleteTodo(idTodo)
{
    let todos = JSON.parse(localStorage.getItem('todos'));
    let todo = []
    todos.forEach((item)=>{
        if(item.id !== idTodo.id){
            todo.push(item);
        }
    })
    localStorage.setItem('todos', JSON.stringify(todo))
}

const uniqueId = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  };

