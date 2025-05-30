const frame = document.getElementById("frame");
const timerLine = document.getElementById("timer");
const score = document.getElementById("score");
const resetButton = document.getElementById("reset");

const gridCount = 3; // number of rows/columns in the square
const totalPieces = gridCount * gridCount;

let pieces = [];
let timer;
let seconds = 0;

resetButton.addEventListener('click', reset);

function createPieces() {
    pieces = [];
    for (let i =0; i < totalPieces; i++) { // Create an element for each piece needed
        const p = document.createElement("div"); // make div
        p.classList.add("piece"); // add piece class
        p.setAttribute("data-index", i); // set the "correct position" index, that will be accessed through dataTransfer later
        p.draggable = true; // make draggable

        const row = Math.floor(i/gridCount); // Calculate which part of the picture it should diplay
        const col = i % gridCount; // Same as  above for horzontal
        p.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
        
        // Event listeners
        p.addEventListener("dragstart", dragStart);
        p.addEventListener("dragover", dragOver);
        p.addEventListener("drop", drop);
        p.addEventListener("dragenter", dragEnter);
        p.addEventListener("dragleave", dragLeave);

        pieces.push(p);
    }
}

function shuffle() {// Shuffling algorithm
    for (let i = pieces.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [pieces[i], pieces[j]] = [pieces[j], pieces[i]]; // shortcut for swapping array items
    }
}

function render() {
    frame.innerHTML = "";
    pieces.forEach(piece => frame.appendChild(piece));
}

function dragStart(e) {
    if (e.target.classList.contains("done")) return;
    e.dataTransfer.setData("text", e.target.dataset.index);
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    if (e.target.classList.contains("done")) return;
    e.target.classList.add("highlight");
}

function dragLeave(e) {
    e.target.classList.remove("highlight"); // Remove the highlight
}

function drop(e) {
    e.preventDefault(); //drop can do other things with images by default
    e.target.classList.remove("highlight"); //No longer option

    const fromIndex = e.dataTransfer.getData("text"); //The dropped index
    const toIndex = e.target.dataset.index; // target index

    const fromPiece = pieces.find(p => p.dataset.index === fromIndex); // The dragged piece
    const toPiece = pieces.find(p => p.dataset.index === toIndex); // The target piece

    // No moving if either piece is done
    if (!fromPiece.draggable || !toPiece.draggable) return;

    // Swap if possible
    const a = pieces.indexOf(fromPiece);
    const b = pieces.indexOf(toPiece);
    [pieces[a], pieces[b]] = [pieces[b], pieces[a]]; // shortcutt for swaping arrays

    render();
    checkDone();
}

function startTimer() {
    clearInterval(timer); // Clear the previous timer
    seconds = 0; // Set the counter variable to 0
    timerLine.textContent = `Time: 0s`;
    timer = setInterval(() => { // Set new timer
        seconds++; // Increment seconds
        timerLine.textContent = `Time: ${seconds}s`; // Display time
    }, 1000);
}


function checkDone() {
    let allDone = true; // assume true and negate through logic

    pieces.forEach((piece, i) => { // go through pieces array
        if (parseInt(piece.dataset.index) === i) { // check if the index is correct, meaning it's in the right spot
            if (piece.draggable) { // if it's not set to undraggable yet, do that
                piece.classList.add("done");  
                piece.draggable = false; // No longer draggable
            }
        } else {
            allDone = false; // Not done
        }
    });

    if (allDone) {
        clearInterval(timer); // reset timer
        score.textContent = `Artwork reassembled in ${seconds} seconds!`;
    }
}

function reset() {
    score.textContent = "";
    createPieces();
    shuffle();

    render();
    startTimer();
}

reset();