const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const retypePassword = document.getElementById("retypePassword").value;
    const description = document.getElementById("description").value;

    // Clear previous error messages
    document.querySelectorAll(".error").forEach(function (error) {
        error.textContent = "";
    });

    let isValid = true;

    // Validate Full Name
    if (
        fullName.length < 3 ||
        fullName.startsWith(" ") ||
        / {2,}/.test(fullName)
    ) {
        document.getElementById("nameError").textContent =
            "Full Name must contain at least 3 characters, cannot start with a space or contain consecutive spaces.";
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    // Validate Phone Number
    const phonePattern = /^\d{10,11}$/;

    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent =
            "Phone number must contain 10 or 11 digits.";
        isValid = false;
    }

    // Validate Password
    if (password.length < 10) {
        document.getElementById("passwordError").textContent =
            "Password must contain at least 10 characters.";
        isValid = false;
    }

    // Validate Retype Password
    if (retypePassword !== password || retypePassword === "") {
        document.getElementById("retypeError").textContent =
            "Retyped password does not match.";
        isValid = false;
    }

    // Validate Description
    if (description.length > 200) {
        document.getElementById("descriptionError").textContent =
            "Description must not exceed 200 characters.";
        isValid = false;
    }

    // Submit result
    if (isValid) {
        alert("Registration successful");
        form.reset();
    }

    return false;
});
