let languages = [];

function addLanguage() {
    let input = document.getElementById("language");
    let value = input.value;

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
        const block = document.createElement("div");
        block.className = "language";
        const text = document.createElement("span");
        text.textContent = language;
        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.onclick = () => removeLanguage(language);
        list.appendChild(block);
        block.appendChild(text);
        block.appendChild(remove);
    })
}