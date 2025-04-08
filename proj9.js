window.addEventListener('DOMContentLoaded', () => {
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
        } else if (fieldName === "txtcolor") {
            document.body.style.color = fieldValue;
        } else if (fieldName === "txtsize") {
            document.body.style.fontSize = fieldValue;
        }
        
    document.cookie = items;
    }


});