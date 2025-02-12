document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();

    console.log("Form submitted");

    let ageElem = document.getElementById("age");
    let ageVal = parseInt(ageElem.value);
    let name = document.getElementById("name").value;
    let interest = document.getElementById("interest");

    console.log(ageVal, name, interest);

    greeting = createGreeting(name);

    document.getElementById("result").innerHTML = `
        <p>${greeting}</p>
        <p>${name} is ${ageVal} years old. The age difference between ${name} and Emma is: ${calculateAgeDifference(ageVal)} years.</p>`;
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

