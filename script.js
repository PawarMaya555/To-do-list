let addTaskBtn = document.querySelector("#addBtn");
let input = document.querySelector(".takeInput");
let list = document.querySelector(".list");
let showmsg = document.querySelector(".showmsg");

addTaskBtn.addEventListener("click", () => {
  if (input.value === "") {
    // alert("You Must Write Inpu Something!");
    showmsg.classList.add("active");
  } else {
    let li = document.createElement("li"); // create Element
    li.innerHTML = input.value; // li mde input chi value add
    list.appendChild(li);
    // cross icon (delet )
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // cross code
    li.appendChild(span);

    showmsg.classList.remove("active");
  }
  input.value = ""; // value add then remove value in input box
  saveData();
});

//compeleted task code
list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("task_compeleted");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// store data on Browser
function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

// dispaly data whenever open the website again
function showList() {
  list.innerHTML = localStorage.getItem("data");
}
showList();
