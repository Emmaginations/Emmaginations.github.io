// Listen for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
let languages = []; // create the array to hold the options

// Add a function to the add button on the click
document.getElementById("add").onclick = function () {
    event.preventDefault(); // prevent the form from submitting and reloading the page
    let input = document.getElementById("language"); 
    let value = input.value;

    if (!value) return; // if there's nothing in the textbox, don't add to the array

    console.log(value);

    languages.push(value); // Push the value to the array
    input.value = "";
    displayLanguages();
}

// Remove the language
function removeLanguage(language) {
    let index = languages.indexOf(language);
    languages.splice(index, 1); // Remove the array element according to the index parameter
    displayLanguages();
}

function displayLanguages() {
    let list = document.getElementById("languageList"); // mKe the div a list
    list.innerHTML =""; // empty the list before each update

    languages.forEach(language => {
        console.log(language);

        const block = document.createElement("div");
        block.className = "language";
        const text = document.createElement("span");
        text.textContent = language;
        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.onclick = () => removeLanguage(language);
        block.appendChild(text); // Append nodes
        block.appendChild(remove);
        list.appendChild(block);
    })
}

document.getElementById("camel").oninput = function () {
    const camel = document.getElementById("camel");
    let regex = /^[a-z]+([A-Z][a-z0-9]*)+$/ // This regular expression defines camel case with at least two words
    const checker = document.getElementById("checker"); // define area to put results
    if (regex.test(camel.value)) { // test if the regex is fulfilled by textbox contents
        checker.textContent = "Your camel case is correct!";
    } else {
        checker.textContent = "Your camel case is incorrect";
    }
}

// Add a function for onchange for the getFile input
document.getElementById("getFile").onchange = function() {
    let userFile = this.files[0]; // define user file
    let reader = new FileReader(); // define file reader
    reader.readAsText(userFile); // read the file as text
    let codeDoc = document.getElementById("codeFile"); // define area to put file text
    reader.onload = function() { // When the reader loads the file completely
        codeDoc.innerHTML = reader.result; // add the text to the area defined previously
    }
}
});

