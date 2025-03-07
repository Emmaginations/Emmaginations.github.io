//This is the data I will be working with
let placements = [1, 1, 5, 1, 2, 2, 13];


let total = 0;
let wins = 0;

//Loop through each element in the placements array
for (let i = 0; i < placements.length; i++) {
    console.log(`at my #${(i+1)} competition I placed ${placements[i]}, `);
    total += placements[i];
    //If i placed firsst
    if (placements[i] == 1) {
        wins++; // increment wins
    }
}

//Calculate average
total = (total / placements.length).toFixed(2);

// Post average to webpage
document.getElementById("average").innerText = `My average placement in skating competitions is: ${total}`;

// Log a message according to the placing average
if (total <= 5) {
    console.log("I placed on average in the top 5.");
} else if (total <= 10) {
    console.log("I placed on average in the top 10.");
} else {
    console.log("I placed below 10th place on average.");
}

// Display a console message according to how many wins were recorded
switch (wins) {
    case 1:
        console.log("I won once.");
        break;
    case 2:
        console.log("I won twice.");
        break;
    case 3:
        console.log("I won three times.");
        break;
    default:
        console.log("I'm on a roll! I won more than three times!");
}