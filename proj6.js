document.getElementById("registrationForm").addEventListener("submit", function(event) { 
    event.preventDefault();
    
    const form = document.forms[0];

    try {
        let fullName = form.fullName.value;
        // Check if the entered value follows the specifications, throw error if not
        if (!/^[A-Za-z ]+$/.test(fullName)) throw "Invalid full name.";
        form.querySelector(`[data-error="fullName"]`).textContent = "";
    } catch (error) {
        console.error(error); // Log error to console
        form.querySelector(`[data-error="fullName"]`).textContent = error;    
    }


    try {
        let username = form.username.value;
        // Use a regular expression to determine if username is valid. First character cannot be number, length between 6 and 15
        if (!/^[A-Za-z][A-Za-z0-9]{6,15}$/.test(username)) throw "Invalid username.";
        form.querySelector(`[data-error="username"]`).textContent = "";
        } catch (error) {
        console.error(error); //Log error
        form.querySelector(`[data-error="username"]`).textContent = error;    
    }

    try {
        let email = form.email;
        // The email type allows direct checking of whether or not it is valid
        if (email.validity.typeMismatch) throw "Invalid email.";
        form.querySelector(`[data-error="email"]`).textContent = "";        
    } catch (error) {
        console.error(error);
        email.form.querySelector(`[data-error="fullName"]`).textContent = error;

    }

    try {
        let password = form.password.value;
        // This regular expression uses look-aheads to determine if the password fills every requirement
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/.test(password)) throw "Invalid password.";
        form.querySelector(`[data-error="password"]`).textContent = "";         
    } catch (error) {
        console.error(error);
        form.querySelector(`[data-error="password"]`).textContent = error;        
    }

    try {
        let confirmPassword = form.confirmPassword.value;
        if (confirmPassword !== form.password.value) throw "The passwords do not match.";
        form.querySelector(`[data-error="confirm"]`).textContent = "";

    } catch (error) {
        console.error(error);
        form.querySelector(`[data-error="confirm"]`).textContent = error;

    }

    try {
        let phoneNumber = form.phoneNumber;
        // This type also allows for simple validity checking
        if (phoneNumber.validity.typeMismatch || !/^\d{10}$/.test(phoneNumber.value)) throw "Invalid phone number.";
        form.querySelector(`[data-error="confirmPassword"]`).textContent = "";
    } catch (error) {
        console.error(error);
        form.querySelector(`[data-error="confirmPassword"]`).textContent = error;
    }

    try {
        let dob = new Date(form.dob.value);
        let today = new Date();
        // Calculate the age
        let age = today.getFullYear() - dob.getFullYear();
        // Account for whether or not the birthday has happened yet this year
        if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()))
            age--;

        if (age < 18) throw "You must be at least 18 years old.";
        form.querySelector(`[data-error="dob"]`).textContent = "";

    } catch (error) {
        console.warn(error);
        form.querySelector(`[data-error="dob"]`).textContent = error;
    }
    form.dob.reportValidity();  // Manually trigger the validity check

    try {
        if (!form.agreeToTerms.checked) throw "You must agree to the terms and conditions.";
        form.querySelector(`[data-error="agreeToTerms"]`).textContent = "";
    } catch (error) {
        console.error(error);
        form.querySelector(`[data-error="agreeToTerms"]`).textContent = error;
    }
    form.agreeToTerms.reportValidity();  // Manually trigger the validity check
});
