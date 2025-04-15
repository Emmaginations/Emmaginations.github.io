const frame = document.getElementById("frame");
const timerLine = document.getElementById("timer");
const score = document.getElementById("score");

const gridCount = 3;
const totalPieces = gridCount * gridCount;

let pieces = [];
let timer;
let seconds = 0;

function createPieces() {
    pieces = [];
    for (let i =0; i < totalPieces; i++) {
        const p = document.createElement("div");
        p.classList.add("piece");
        p.setAttribute("data-index", i);
        p.draggable = true;

        const row = Math.floor(i/gridCount);
        const col = i % gridCount;
        p.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
        
        p.addEventListener("dragstart", dragStart);
        p.addEventListener("dragover", dragOver);
        p.addEventListener("drop", drop);
        p.addEventListener("dragenter", dragEnter);
        p.addEventListener("dragleave", dragLeave);

        pieces.push(p);
    }
}

function shuffle() {
    for (let i = pieces.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
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
    e.target.classList.remove("highlight");
}

function drop(e) {
    e.preventDefault();
    e.target.classList.remove("highlight");

    const fromIndex = e.dataTransfer.getData("text");
    const toIndex = e.target.dataset.index;

    const fromPiece = pieces.find(p => p.dataset.index === fromIndex);
    const toPiece = pieces.find(p => p.dataset.index === toIndex);

    // Don't allow swap if either piece is locked (draggable === false)
    if (!fromPiece.draggable || !toPiece.draggable) return;

    // Swap the pieces in the array
    const a = pieces.indexOf(fromPiece);
    const b = pieces.indexOf(toPiece);
    [pieces[a], pieces[b]] = [pieces[b], pieces[a]];

    render();
    checkDone();
}

function startTimer() {
    clearInterval(timer);
    seconds = 0;
    timerLine.textContent = `Time: 0s`;
    timer = setInterval(() => {
        seconds++;
        timerLine.textContent = `Time: ${seconds}s`;
    }, 1000);
}


function checkDone() {
    let allDone = true;

    pieces.forEach((piece, i) => {
        // Check if each piece is in its correct spot
        if (parseInt(piece.dataset.index) === i) {
            if (piece.draggable) {
                piece.classList.add("done");  // Visually indicate it's locked
                piece.draggable = false;      // Prevent future movement
            }
        } else {
            allDone = false;
        }
    });

    if (allDone) {
        clearInterval(timer);
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