window.addEventListener('DOMContentLoaded', () => {
    let preferences = readCookie();

    if (preferences.bgcolor) {
        document.body.style.backgroundColor = preferences.bgcolor;
    }
    if (preferences.txtcolor) {
        document.body.style.color = preferences.txtcolor;
    }
    if (preferences.txtsize) {
        document.body.style.setProperty("font-size", `${preferences.txtsize}px`, "important");
    }
    
    let qString = location.search.slice(1);
    console.log(qString);

    qString = decodeURIComponent(qString);

    let preferenceData = qString.split(/&/g);

    for (let items of preferenceData) {
        let fieldValuePair = items.split(/=/);
        let fieldName = fieldValuePair[0];
        let fieldValue = fieldValuePair[1];

        if (fieldName === "bgcolor") {
            document.body.style.backgroundColor = fieldValue;
        }
        if (fieldName === "txtcolor") {
            document.body.style.color = fieldValue;
        }
        if (fieldName === "txtsize") {
            document.body.style.setProperty("font-size", `${fieldValue}px`, "important");
        }
    
    let expire= new Date();
    expire.setHours(expire.getHours() + 1);
    document.cookie = `${items}; expires=${expire.toUTCString()}; path=/`;
    }


});

function readCookie() {
    let fields = {};

    if (document.cookie) {
        let cookieList = document.cookie.split("; ");

        for (let item of cookieList) {
            let cookie = item.split("=");
            let name = cookie[0];
            let value = decodeURIComponent(cookie[1]);
            fields[name] = value;
        }
    }
    
    return fields;
}