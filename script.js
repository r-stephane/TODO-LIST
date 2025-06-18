let inputField = document.getElementById("inputField");
let tasks = document.getElementById("tasks");
console.log("task");

const addtask = () => {
    let task = inputField.value.trim();
    const li = document.createElement("li");
    li.innerHTML = `
    <label>
        <input type="checkbox">
        <span>${task}</span>
    </label>
    <span class="editBtn"><i class="fa-solid fa-pen-to-square"></i></span>
    <span class="deleteBtn"><i class="fa-solid fa-trash"></i></span>
`
    tasks.appendChild(li);
    inputField.value = "";
    //console.log(li);

    const checkbox = li.querySelector("input");
    let span1 = li.querySelector("span");
    const editBtn = li.querySelector(".editBtn");
    const deleteBtn = li.querySelector(".deleteBtn");
    console.log(deleteBtn);

    //console.log(checkbox)
    checkbox.addEventListener("click", () => {
        span1.classList.toggle("checked");
        counter();
    })

    editBtn.addEventListener("click", function () {
        const taskUpdate = prompt("editer tache:", span1.textContent)
        if (taskUpdate !== null) {
            span1.textContent = taskUpdate;
            checkbox.checked = false
            span1.classList.remove("checked");
        }
        counter();
    })

    deleteBtn.addEventListener("click", function () {
    if (confirm('voulez vous supprimer cette tache?')) {
        li.remove();
    }
})
}

const deleteall = document.getElementById("deleteall");
deleteall.addEventListener("click", function () {
    if (confirm('etes vous sur de vouloir effacer toutes les taches?')) {
        tasks.innerHTML = "";
        counter();
    }
})


const counter = () => {
    let completedTasks = document.querySelectorAll(".checked").length;
    let compteur = document.getElementById("completedcompteur");
    compteur.innerText = completedTasks;
}

counter();

const uncounter = () => {
    let elementsSansChecked = document.querySelectorAll(' li:not(.checked)');
    let uncompteur = document.querySelector("li > label > span");
    uncompteur.innerText = elementsSansChecked;
    console.log(uncompteur);
}