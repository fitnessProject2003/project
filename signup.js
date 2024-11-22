document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const gender = document.getElementById("gender").value;

    // Password format
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;

    if (!passwordRegex.test(password)) {
        document.getElementById("password").classList.add("error");
        document.getElementById("confirmPassword").classList.add("error");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (firstName && lastName && username && password && gender) {
        // Redirect to login page on success
        alert("Sign up successful! Redirecting to login page...");
        window.location.href = "login.html";
    } else {
        alert("Please fill out all fields.");
    }
});
