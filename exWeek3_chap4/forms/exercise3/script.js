const form = document.getElementById("memberForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim().normalize("NFC");
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    document.querySelectorAll(".error").forEach(function (error) {
        error.textContent = "";
    });

    let isValid = true;

    // Full Name: begins with a letter, at least 3 characters, Vietnamese allowed
    const namePattern = /^\p{L}[\p{L}\p{M} ]*$/u;

    if (fullName.length < 3 || !namePattern.test(fullName)) {
        document.getElementById("nameError").textContent =
            "Name must start with a letter and contain at least 3 characters.";
        isValid = false;
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    // Password: minimum 8 characters and one uppercase letter
    if (password.length < 8 || !/[A-Z]/.test(password)) {
        document.getElementById("passwordError").textContent =
            "Password must have at least 8 characters and one uppercase letter.";
        isValid = false;
    }

    // Confirm Password
    if (confirmPassword === "" || confirmPassword !== password) {
        document.getElementById("confirmError").textContent =
            "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        alert("Registration successful");
        form.reset();
    }

    return false;
});
