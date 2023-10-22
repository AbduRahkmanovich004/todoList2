"use strict";

// varebles
const input = document.querySelector(".form-control");
const todoList = document.querySelector("#todoList");
const addBtn = document.querySelector("#addButton");
const clearList = document.querySelector("#clearButton");
const clearCopmlated = document.querySelector(".clearCopmlated");
const calcLeftbtn = document.querySelector(".calcLeft");
const allBtn = document.querySelector(".All")
const allActive = document.querySelector(".Active")
const allComplated = document.querySelector(".Complated")





//  function

// All
function All(li) {
  li.style.display = "flex";
}
// calcLeft
function calcLeft() {
  calcLeftbtn.textContent = `${
    document.querySelectorAll("li").length - 1
  } items left`;
}

function addLi() {
  if (input.value) {
    // for value
    const value = input.value;
    input.value = "";

    // element li
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.padding = "15px";
    li.style.marginTop = "20px";
    li.style.borderBottom = "1px solid white";

    const svg = document.createElement("i");
    svg.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
        </svg>
        `;
    svg.style.fontSize = "20px";
    svg.style.margin = 0;
    svg.style.padding = 0;
    svg.style.transform = "translateY(0.3rem)";

    // element p
    const p = document.createElement("p");
    p.textContent = value;
    p.style.fontWeight = "600";
    p.style.fontSize = "20px";
    p.style.margin = "0 0 0 5rem";
    p.style.overflow = "hidden";

    // element div
    const div = document.createElement("div");
    div.classList.add("defult");
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.gap = "10px";

    //   element btnDelete
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.classList.add("btn-primary");
    btnDelete.classList.add("btn");
    btnDelete.style.opacity = 0

    // btns > div
    div.append(btnDelete);

    // p,div > li
    li.append(svg);
    li.append(p);
    li.append(div);

    // li > todoList
    todoList.prepend(li);

    // keyPress

    // btnEdit
    p.addEventListener("click", () => {
      if (p.style.display != "none") {
        // doneBtn
        var done = document.createElement("button");
        done.textContent = "Done";
        done.classList.add("btn-success");
        done.classList.add("btn");
        // cancelBtn
        var cancel = document.createElement("button");
        cancel.textContent = "Cancel";
        cancel.classList.add("btn");
        cancel.classList.add("btn-danger");
        // input
        var input = document.createElement("input");
        input.style.width = "40%";
        input.value = p.textContent;
        input.style.height = "20px";
        input.style.color = "black";
        input.style.height = "2.6rem";
        input.style.border = "none";
        input.style.outline = "none";
        input.style.borderRadius = "1rem";
        input.style.background = "#ffffff44";
        input.style.padding = "0.5rem 0.5rem 0.5rem 1rem";

        input.style.fontSize = "2rem";
        // editBtn
        var editBtn = document.createElement("div");
        editBtn.classList.add("defult");
        editBtn.style.display = "flex";
        editBtn.style.alignItems = "center";
        editBtn.style.gap = "10px";

        // done, cancel > editBtn
        editBtn.append(done);
        editBtn.append(cancel);

        // shartlart
        p.style.display = "none";
        div.style.display = "none";
        editBtn.style.display = "flex";
        input.style.display = "inline-block";

        // input, editBtn > li
        li.append(input);
        li.append(editBtn);

        // done click
        done.addEventListener("click", () => {
          p.textContent = input.value;
          input.value = "";
          p.style.display = "inline-block";
          div.style.display = "flex";
          editBtn.style.display = "none";
          input.style.display = "none";
        });

        // cancel click
        cancel.addEventListener("click", () => {
          input.value = "";
          p.style.display = "inline-block";
          div.style.display = "flex";
          editBtn.style.display = "none";
          input.style.display = "none";
        });
      }
    });
    // btnComplate
    let isTrue = true;
    svg.addEventListener("click", () => {
      if (isTrue) {
        p.style.textDecoration = "line-through";
        p.style.opacity = 0.5;
        isTrue = false;
        svg.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
            </svg>
            `;
      } else {
        p.style.opacity = 1;
        p.style.textDecoration = "none";
        isTrue = true;
        svg.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
            </svg>
        `;
      }
      calcLeft();
    });
    // all show
    allBtn.addEventListener("click",()=>{
      li.style.display="flex"
    })
    // active btn 
    allActive.addEventListener("click",()=>{
      if(!isTrue){
        li.style.display="none"
      }else{
        li.style.display="flex"
      }
    })
    // complated btn 
    allComplated.addEventListener("click",()=>{
      if(isTrue){
        li.style.display="none"
      }else{
        li.style.display="flex"
      }
    })



    // Comlated delete
    clearCopmlated.addEventListener("click", () => {
      if (!isTrue) {
        li.remove();
        calcLeft();
      }
    });

    // btnDelete
    btnDelete.addEventListener("click", () => {
      li.remove();
      calcLeft();
    });
  }
}

// add todo
document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    addLi();
    calcLeft();
  }
});

// clear todo
clearList.addEventListener("click", () => {
  let i = document.querySelector("#todoList");
  i.innerHTML = `
  <li class="footer">
          <p>0 items left</p>
          <div>
            <p>All</p>
            <p>Active</p>
            <p>Complated</p>
          </div>
          <div>
            <p>Clear Complated</p>
            <p id="clearButton">Clear todo</p>
          </div>
        </li>
        `;
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Insert") {
    console.log("working");
    console.log(typeof new Date());
  }
});
