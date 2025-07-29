
const inputBox = document.getElementById("input-text");
const addButton = document.getElementById("add-btn");
const listContainer = document.querySelector(".list-container");

addButton.addEventListener("click", function () {
    const task = inputBox.value.trim();
    if (task === "") {
        alert("Enter a task");
        return;
    }

    const li = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = task;

    const icons = document.createElement("span");
    icons.classList.add("icons");

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("del");
    deleteBtn.textContent = "🗑";

    const correctBtn = document.createElement("span");
    correctBtn.classList.add("correct");
    correctBtn.textContent = "✔️";

    deleteBtn.addEventListener("click", () => {
        li.remove();
        checkEmptyList();
    });

    correctBtn.addEventListener("click", () => {
        taskSpan.style.textDecoration = "line-through";
        correctBtn.style.color = "green";
    });

    icons.appendChild(deleteBtn);
    icons.appendChild(correctBtn);
    li.appendChild(taskSpan);
    li.appendChild(icons);

    listContainer.appendChild(li);
    inputBox.value = "";

    checkEmptyList();
});

function checkEmptyList() {
    if (listContainer.children.length === 0) {
        const empty = document.createElement("li");
        empty.textContent = "No tasks";
        listContainer.appendChild(empty);
    } else {
        const firstItem = listContainer.children[0];
        if (firstItem && firstItem.textContent === "No tasks") {
            listContainer.removeChild(firstItem);
        }
    }
}