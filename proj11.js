// API key
const key = '315dad4c9a9c34572a2fd92e601f633a';
const date = new Date();
const unixTime = Math.floor(date.getTime()/1000) + 86400;

const submitFetch = document.getElementById("submitFetch");
const submitXML = document.getElementById("submitXML");

// Add event listeners for button clicks
submitFetch.addEventListener("click", weatherFetch);
submitXML.addEventListener("click", weatherXML);

//Retrieve through Fetch
function weatherFetch() {
    clear();
    // Promise statements
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.41&lon=79.14&appid=${key}`)
        .then(response => response.json()) // Parse json
        .then(data => display(data))
        .catch((error) => {
            console.log(error);
            document.getElementById('results').innerHTML = "Error Fetching Data"
        });
}

// Retrieve through XMLHttpRequest
function weatherXML() {
    clear();
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=37.41&lon=79.14&appid=${key}`, true);
    xhr.send(null);

    // Handle response
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >=200 && xhr.status < 300) {
                const data = JSON.parse(xhr.responseText); // Parse json
                display(data);
            } else {
                document.getElementById('results').innerHTML = "Error Fetching Data"
            }
        } 
    }

}

function display(data) {
// Work through JSON file
const results = document.getElementById("results"); // Define result area
const sunrise = new Date(data.sys.sunrise * 1000); // Calculate date object for sunrise
const sunset = new Date(data.sys.sunset *1000); // Calculate date object for sunset

// Create Result Report
results.innerHTML = ` 
    <h2>Sunrise Time: </h2>
    <p>${sunrise.toString()}</p>
    <h2>Sunset Time:</h2>
    <p>${sunset.toString()}</p>
`;
}

//Clear result area
function clear() {
    document.getElementById('results').innerHTML = "";
}