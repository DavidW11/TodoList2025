const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === "") {
        alert("must input text");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

document.addEventListener("click", (event) => {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
    }
    saveData();
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function setData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

setData();