document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const form = document.forms[0];

    try {
        let fullName = form.fullName.value;
        if (!/^[A-Za-z ]+$/.test(fullName)) throw "Invalid full name.";
    } catch (error) {
        console.error(error);
        form.fullName.setCustomValidity(error);
    }

    try {
        let username = form.username.value;
        if (!/^[A-Za-z][A-Za-z0-9]{6,15}$/.test(username)) throw "Invalid username.";
    } catch (error) {
        console.error(error);
        form.username.setCustomValidity(error);
    }

    try {
        let email = form.email;
        if (email.validity.typeMismatch) throw "Invalid email.";
    } catch (error) {
        console.error(error);
        email.setCustomValidity(error);
    }

    try {
        let password = form.password.value;
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/.test(password)) throw "Invalid password.";
    } catch (error) {
        console.error(error);
        form.password.setCustomValidity(error);
    }

    try {
        let confirmPassword = form.confirmPassword.value;
        if (confirmPassword !== form.password.value) throw "The passwords do not match.";
    } catch (error) {
        console.error(error);
        form.confirmPassword.setCustomValidity(error);
    }

    try {
        let phoneNumber = form.phoneNumber;
        if (phoneNumber.validity.typeMismatch) throw "Invalid phone number.";

    } catch (error) {
        console.error(error);
        phoneNumber.setCustomValidity(error);
    }

    try {
        let dob = new Date(form.dob.value);
        let today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        
        if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()))
            age--;

        if (age < 18) throw "You must be at least 18 years old.";

    } catch (error) {
        console.warn(error);
        form.dob.setCustomValidity(error);

    }

    try {
        if (!form.agreeToTerms.checked) throw "You must agree to the terms and conditions.";
    } catch (error) {
        console.error(error);
        form.agreeToTerms.setCustomValidity(error);
    }

});