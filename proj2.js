document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();

    let ageElem = document.getElementById("age");
    let ageVal = parseInt(ageElem.value);
    document.getElementById("result").innerHTML = `<p>The age difference between you and Emma is: ${calculateAgeDifference(ageVal)} years.</p>`;
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

