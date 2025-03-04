let art = document.createElement("img");
art.src = "../img3.jpg";
art.alt = "A digital drawing of a woman";
art.onclick = createOverlay;

let header = document.createElement("h2");
let description = document.createTextNode("This is an example of my digital drawing skills.");
let main_c = document.getElementById("main-content");

main_c.appendChild(art);
main_c.appendChild(header);
header.appendChild(description);

function createOverlay() {
	let overlay = document.createElement("div");
	overlay.id = "artOverlay";

	let figureBox = document.createElement("figure");
	overlay.appendChild(figureBox);
	document.body.appendChild(overlay);

    let overlayImage = document.createElement("img");
    overlayImage.src = "../img5.jpg";
    figureBox.appendChild(overlayImage);

    overlayImage.onclick = function() {
        document.body.removeChild(overlay);
    }
}
		