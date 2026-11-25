
const form = document.getElementById("zooForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value;

    document.querySelectorAll(".error").forEach(function (error) {
        error.textContent = "";
    });

    let isValid = true;

    // Validate Name
    if (name.length < 2) {
        document.getElementById("nameError").textContent =
            "Name must contain at least 2 characters.";
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    // Validate Age
    const ageNumber = Number(age);

    if (age === "" || !Number.isFinite(ageNumber) ||
        ageNumber < 1 || ageNumber > 120) {
        document.getElementById("ageError").textContent =
            "Age must be a number from 1 to 120.";
        isValid = false;
    }

    if (isValid) {
        alert("Đăng ký thành công!");
        form.reset();
    }
});
