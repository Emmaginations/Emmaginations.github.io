document.addEventListener("DOMContentLoaded", function () {
    let languages = [];

document.getElementById("add").onclick = function () {
    event.preventDefault();
    let input = document.getElementById("language");
    let value = input.value;

    if (!value) return;

    console.log(value);

    languages.push(value);
    input.value = "";
    displayLanguages();
}

function removeLanguage(language) {
    let index = languages.indexOf(language);
    languages.splice(index, 1);
    displayLanguages();
}

function displayLanguages() {
    let list = document.getElementById("languageList");
    list.innerHTML ="";

    languages.forEach(language => {
        console.log(language);

        const block = document.createElement("div");
        block.className = "language";
        const text = document.createElement("span");
        text.textContent = language;
        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.onclick = () => removeLanguage(language);
        block.appendChild(text);
        block.appendChild(remove);
        list.appendChild(block);
    })
}

document.getElementById("camel").oninput = function () {
    const camel = document.getElementById("camel");
    let regex = /^[a-z]+([A-Z][a-z0-9]*)+$/
    const checker = document.getElementById("checker");
    if (regex.test(camel.value)) {
        checker.textContent = "Your camel case is correct!";
    } else {
        checker.textContent = "Your camel case is incorrect";
    }
}

document.getElementById("getFile").onchange = function() {
    let userFile = this.files[0];
    let reader = new FileReader();
    reader.readAsText(userFile);
    let codeDoc = document.getElementById("codeFile");
    reader.onload = function() {
        codeDoc.innerHTML = reader.result;
    }
}
});

