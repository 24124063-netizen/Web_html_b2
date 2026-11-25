
const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentId = document.getElementById("studentId").value.trim();
    const password = document.getElementById("password").value;

    // XX = 2 digits, 211 = fixed, YY = 2 uppercase letters, ZZZZ = 4 digits
    const studentIdPattern = /^\d{2}211[A-Z]{2}\d{4}$/;
    const passwordPattern = /^[a-zA-Z0-9_]{6,}$/;

    if (!studentIdPattern.test(studentId)) {
        alert("Invalid Student ID. Expected format: XX211YYZZZZ (e.g. 23211AB1234).");
        return;
    }

    if (!passwordPattern.test(password)) {
        alert("Invalid password. Use at least 6 characters: letters, numbers, or underscore.");
        return;
    }

    alert("Login successful!");
});
