document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();

    let ageElem = document.getElementById("age");
    document.getElementById("result").innerHTML = `<p>The age difference between you and Emma is: ${calculateAgeDifference(ageElem)} years.</p>`;
});


function calculateAgeDifference(age) {
    if (age > 21) {
        console.log("Computation complete.");
        return (age.value - 21);
    } else if (age < 21) {
        console.log("Computation complete.");
        return (21 - age.value);
    }
}

