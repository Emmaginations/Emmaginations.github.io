document.getElementById("registrationForm").addEventListener("submit", function(event) { 
    event.preventDefault();
    
    const form = document.forms[0];

    try {
        let fullName = form.fullName.value;
        // Check if the entered value follows the specifications, throw error if not
        if (!/^[A-Za-z ]+$/.test(fullName)) throw "Invalid full name.";
        form.fullName.setCustomValidity(""); // Reset error if there are no problems
        form.fullName.reportValidity();  // Manually trigger the validity check

    } catch (error) {
        console.error(error); // Log error to console
        form.fullName.setCustomValidity(error); // Display error to user
        form.fullName.reportValidity();  // Manually trigger the validity check
    }

    try {
        let username = form.username.value;
        // Use a regular expression to determine if username is valid. First character cannot be number, length between 6 and 15
        if (!/^[A-Za-z][A-Za-z0-9]{6,15}$/.test(username)) throw "Invalid username.";
        form.username.setCustomValidity("");
        form.username.reportValidity(); // Manually trigger the validity check
    } catch (error) {
        console.error(error); //Log error
        form.username.setCustomValidity(error); //Display error
        form.username.reportValidity();  // Manually trigger the validity check
    }

    try {
        let email = form.email;
        // The email type allows direct checking of whether or not it is valid
        if (email.validity.typeMismatch) throw "Invalid email.";
        email.setCustomValidity("");
        email.reportValidity(); // Manually trigger the validity check
    } catch (error) {
        console.error(error);
        email.setCustomValidity(error);
        email.reportValidity(); // Manually trigger the validity check
    }

    try {
        let password = form.password.value;
        // This regular expression uses look-aheads to determine if the password fills every requirement
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/.test(password)) throw "Invalid password.";
        form.password.setCustomValidity("");   
        form.password.reportValidity();  // Manually trigger the validity check
    } catch (error) {
        console.error(error);
        form.password.setCustomValidity(error);
        form.password.reportValidity();  // Manually trigger the validity check
    }

    try {
        let confirmPassword = form.confirmPassword.value;
        if (confirmPassword !== form.password.value) throw "The passwords do not match.";
        form.confirmPassword.setCustomValidity("");
        form.confirmPassword.reportValidity();  // Manually trigger the validity check
    } catch (error) {
        console.error(error);
        form.confirmPassword.setCustomValidity(error);
        form.confirmPassword.reportValidity();  // Manually trigger the validity check
    }

    try {
        let phoneNumber = form.phoneNumber;
        // This type also allows for simple validity checking
        if (phoneNumber.validity.typeMismatch) throw "Invalid phone number.";
        phoneNumber.setCustomValidity("");
        phoneNumber.reportValidity();  // Manually trigger the validity check
    } catch (error) {
        console.error(error);
        phoneNumber.setCustomValidity(error);
        phoneNumber.reportValidity();  // Manually trigger the validity check
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
        form.dob.setCustomValidity("");
        form.dob.reportValidity();  // Manually trigger the validity check

    } catch (error) {
        console.warn(error);
        form.dob.setCustomValidity(error);
        form.dob.reportValidity();  // Manually trigger the validity check
    }

    try {
        if (!form.agreeToTerms.checked) throw "You must agree to the terms and conditions.";
        form.agreeToTerms.setCustomValidity("");
        form.agreeToTerms.reportValidity();  // Manually trigger the validity check
    } catch (error) {
        console.error(error);
        form.agreeToTerms.setCustomValidity(error);
        form.agreeToTerms.reportValidity();  // Manually trigger the validity check
    }
});