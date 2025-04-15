const frame = document.getElementById("frame");
const timerLine = document.getElementById("timer");

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
    if (e.target.classList.contains("done")) return;
    
    const io = e.dataTransfer.getData("text");
    const it = e.target.dataset.index;

    if (it === io) {
        const oPiece = pieces.find(p =>p.dataset.index === io);
        const correctPosition = pieces[it];

        const index = pieces.indexOf(oPiece);
        pieces[index] = oPiece;

        oPiece.classList.add("done");
        oPiece.classList.draggable = false;
        render();
        //checkSolved();
    } else {
        const oPiece = pieces.find(p => p.dataset.index === io);
        const tPiece = pieces.find(p => p.dataset.index === it);
        const oIndex = pieces.indexOf(oPiece);
        const tIndex = pieces.indexOf(tPiece);
        let a = pieces[oIndex];
        let b = pieces[tIndex];
        pieces[oIndex] = b;
        pieces[tIndex] = a;
        render();
    }
}

createPieces();
shuffle(pieces);
render();