document.getElementById("contactForm").addEventListener("submit", function(event) { 
    const form = document.forms[0];

    try {
        let name = form.name.value;
        // Check if the entered value follows the specifications, throw error if not
        if (!/^[A-Za-z ]+$/.test(name)) throw "Invalid name.";
        form.querySelector(`[data-error="name"]`).textContent = "";
    } catch (error) {
        event.preventDefault();
        console.error(error); // Log error to console
        form.querySelector(`[data-error="name"]`).textContent = error;    
    }

    try {
        let email = form.email;
        // The email type allows direct checking of whether or not it is valid
        if (email.validity.typeMismatch) throw "Invalid email.";
        form.querySelector(`[data-error="email"]`).textContent = "";        
    } catch (error) {
        event.preventDefault();
        console.error(error);
        email.form.querySelector(`[data-error="email"]`).textContent = error;

    }

    try {
        let phoneNumber = form.phoneNumber;
        // This type also allows for simple validity checking
        if (phoneNumber.validity.typeMismatch || !/^\d{10}$/.test(phoneNumber.value)) throw "Invalid phone number.";
        form.querySelector(`[data-error="phoneNumber"]`).textContent = "";
    } catch (error) {
        event.preventDefault();
        console.error(error);
        form.querySelector(`[data-error="phoneNumber"]`).textContent = error;
    }

});