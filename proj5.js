let art = document.createElement("img");
art.src = "../img3.jpg";
art.alt = "A digital drawing of a woman";
art.onclick = createOverlay;
// Use of createElement()
let header = document.createElement("h2");
let description = document.createTextNode("This is an example of my digital drawing skills.");
let main_c = document.getElementById("main-content");

// Use of appendChild()
main_c.appendChild(header);
header.appendChild(description);
main_c.appendChild(art);

// Function to create an overlay that replaces the current text image
function createOverlay() {
    let overlayImage = document.createElement("img");
    overlayImage.src = "../img5.jpg";
    overlayImage.id = "replacement";
    main_c.removeChild(art);
    main_c.appendChild(overlayImage);

    overlayImage.onclick = function() {
        main_c.removeChild(overlayImage);

        let art = document.createElement("img");
        art.src = "../img3.jpg";
        art.alt = "A digital drawing of a woman";
        art.onclick = createOverlay;

        main_c.appendChild(art);
    }
}
		