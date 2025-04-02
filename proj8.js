const titleInput = document.getElementById("title");
const personInput = document.getElementById("person");
const dateInput = document.getElementById("date");

const addButton = document.getElementById("add");

let taskList = [];

addButton.addEventListener("click", () => {
    //Check validity
    if (!/^[a-zA-Z0-9 ]+$/.test(titleInput.value)) {
        return;
    } else if (!/^[a-zA-Z0-9 ]+$/.test(personInput.value)) {
        return;
    }

    let newTask = new Task(titleInput.value, personInput.value, dateInput.value, taskList);
    taskList.push(newTask);
    
    displayTasks();
});


function displayTasks() {
    let list = document.getElementById("taskList"); // mKe the div a list
    list.innerHTML =""; // empty the list before each update

    taskList.forEach(task => {
        const listing = document.createElement("div");
        listing.className = "task";
        const title = document.createElement("span");
        title.textContent = task.title;
        const person = document.createElement("span");
        person.textContent = task.person;
        const date = document.createElement("span");
        date.textContent = task.date;
        const complete = document.createElement("button");
        complete.textContent = task.completed;
        const editor = document.createElement("button");
        editor.textContent = "Edit";
        const remover = document.createElement("button");
        remover.textContent = "Remove";

        listing.appendChild(title);
        listing.appendChild(person);
        listing.appendChild(date);
        listing.appendChild(complete);
        listing.appendChild(editor);
        listing.appendChild(remover);

        list.appendChild(listing);

        complete.addEventListener("click", () => {
            if (task.completed == true) {
                task.completed = false;
                displayTasks();
            } else {
                task.completed = true;
                displayTasks();
            }
        });

        editor.addEventListener("click", () => {
            let t = titleInput.value;
            let p = personInput.value;
            let d = dateInput.value;
            
            if (t == "") {
                t = task.title;
            }

            if (p == "") {
                p = task.person;
            }

            if (d == "") {
                d  = task.date;
            }

            if (!/^[a-zA-Z0-9 ]+$/.test(titleInput.value)) {
                return;
            } else if (!/^[a-zA-Z0-9 ]+$/.test(personInput.value)) {
                return;
            }

            task.updateTask(t, p, d);
            displayTasks();
        });

        remover.addEventListener("click", () => {
            task.removeTask();
            displayTasks();
        });

    });
}