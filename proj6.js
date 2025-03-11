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
        form.username.parentNode.nextSibling.nextSibling.textContent = "";
    } catch (error) {
        console.error(error);
        form.username.parentNode.nextSibling.nextSibling.textContent = error;
    }

    try {
        let email = form.email;
        if (email.validity.typeMismatch) throw "Invalid email.";
        form.email.parentNode.nextSibling.nextSibling.textContent = "";
    } catch (error) {
        console.error(error);
        form.email.parentNode.nextSibling.nextSibling.nextSitextContent = error;
    }

    try {
        let password = form.password.value;
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/.test(password)) throw "Invalid password.";
        form.password.parentNode.nextSibling.nextSibling.textContent = "";
    } catch (error) {
        console.error(error);
        form.password.parentNode.nextSibling.nextSibling.textContent = error;
    }

    try {
        let confirmPassword = form.confirmPassword.value;
        if (confirmPassword !== form.password.value) throw "The passwords do not match.";
        form.confirmPassword.parentNode.nextSibling.nextSibling.textContent = "";
    } catch (error) {
        console.error(error);
        form.confirmPassword.parentNode.nextSibling.nextSibling.textContent = error;

    }

    try {
        let phoneNumber = form.phoneNumber;
        if (phoneNumber.validity.typeMismatch) throw "Invalid phone number.";
        form.phoneNumber.parentNode.nextSibling.nextSibling.textContent = "";

    } catch (error) {
        console.error(error);
        form.phoneNumber.parentNode.nextSibling.nextSibling.textContent = error;
    }

    try {
        let dob = new Date(form.dob.value);
        let today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        
        if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()))
            age--;

        if (age < 18) throw "You must be at least 18 years old.";
        form.dob.parentNode.nextSibling.nextSibling.textContent = "";

    } catch (error) {
        console.warn(error);
        form.dob.parentNode.nextSibling.nextSibling.textContent = error;

    }

    try {
        if (!form.agreeToTerms.checked) throw "You must agree to the terms and conditions.";
        form.agreeToTerms.parentNode.nextSibling.nextSibling.textContent = "";
    } catch (error) {
        console.error(error);
        form.agreeToTerms.parentNode.nextSibling.nextSibling.textContent = "";
    }

});