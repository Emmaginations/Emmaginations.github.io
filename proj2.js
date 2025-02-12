document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();

    let age = document.getElementById("age");
    document.getElementById("result").innerHTML = `<p>The age difference between you and Emma is: ${calculateAgeDifference(document.getElementById(age))} years.</p>`;
});


function calculateAgeDifference(age) {
    if (age > 21) {
        console.log("Computation complete.");
        return (parseInt(age.value) - 21);
    } else if (age < 21) {
        console.log("Computation complete.");
        return (21 - parseInt(age.value));
    }
}

