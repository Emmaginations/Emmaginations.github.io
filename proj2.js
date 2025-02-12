document.getElementById("submit").addEventListener("click", function(event) {
    //prevent the page from reloading
    event.preventDefault();

    console.log("Form submitted");


    // Create objects for the values of each field in the form
    let age = document.getElementById("age").value;
    let ageVal = parseInt(age);
    let name = document.getElementById("fname").value;
    let interest = document.getElementById("interest").value;

    let valid = true;

    // Clear errors and result
    document.getElementById("fnameError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("interestError").textContent = "";
    document.getElementById("result").innerHTML = "";

    if (age == "" || isNaN(ageVal)) {
        valid = false;
        document.getElementById("ageError").textContent = "Please enter a valid age";
    }
    if (name == "") {
        valid = false;
        document.getElementById("fnameError").textContent = "Please enter your name";
    }
    if (interest == "") {
        valid = false;
        document.getElementById("interestError").textContent = "Please enter your reason to be interested in this website";
    }
    
    if (valid == true) {
        console.log(ageVal, name, interest);

        greeting = createGreeting(name);

        //set the innerHTML of the results section
        document.getElementById("result").innerHTML = `
            <p>${greeting}</p>
            <p>${name} is ${ageVal} years old. 
            The age difference between ${name} and Emma is: ${calculateAgeDifference(ageVal)} years.</p>`;
    } else {
        console.log("Invalid Input")
    }
});


function calculateAgeDifference(age) {
    if (age > 21) {
        console.log("Computation complete.");
        return (age - 21);
    } else if (age < 21) {
        console.log("Computation complete.");
        return (21 - age);
    }
}

function createGreeting(name) {
    return `Hello ${name}! Welcome to the website.`;
}

