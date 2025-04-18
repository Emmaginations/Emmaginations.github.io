const key = '315dad4c9a9c34572a2fd92e601f633a';
const date = new Date();
const unixTime = Math.floor(date.getTime()/1000) + 86400;

const submitFetch = document.getElementById("submitFetch");
const submitXML = document.getElementById("submitXML");

submitFetch.addEventListener("click", weatherFetch);
submitXML.addEventListener("click", weatherXML);

function weatherFetch() {
    clear();
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=37.41&lon=79.14&appid=${key}`)
        .then(response => response.json())
        .then(data => display(data))
        .catch((error) => console.log(error));
}

function weatherXML() {
    clear();
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', `https://api.openweathermap.org/data/3.0/onecall?lat=37.41&lon=79.14&appid=${key}&units=standard`, true);
    xhr.send(null);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >=200 && xhr.status < 300) {
                const data = JSON.parse(xhr.responseText);
                display(data);
            } else {
                document.getElementById('results').innerHTML = "Error"
            }
        } 
    }

}

function display(data) {
// Work through JSON file
const results = document.getElementById("results");
const time = new Date(data.current.sunrise * 1000);
results.innerHTML = `
    <h2>Next Sunrise Time: </h2>
    <p> ${time.toString()}</p>
`;
}

function clear() {
    document.getElementById('results').innerHTML = "";
}