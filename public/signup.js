document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const gender = document.getElementById("gender").value;

    document.querySelectorAll(".form-control").forEach(input => input.classList.remove("error"));

    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9._]{2,15}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;

    const errorElement = document.getElementById("error");
    if (errorElement) {
        errorElement.classList.add("d-none");
        errorElement.innerHTML = "";
    }

    if (!usernameRegex.test(username)) {
        document.getElementById("username").classList.add("error");
        if (errorElement) {
            errorElement.classList.remove("d-none");
            errorElement.innerHTML = "Username must start with a letter, contain only letters, digits, underscores, and periods, and be 3–16 characters long.";
        }
        return;
    }

    if (!passwordRegex.test(password)) {
        document.getElementById("password").classList.add("error");
        if (errorElement) {
            errorElement.classList.remove("d-none");
            errorElement.innerHTML = "Password must be 8-16 characters long, contain at least one uppercase letter, and one number.";
        }
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPassword").classList.add("error");
        if (errorElement) {
            errorElement.classList.remove("d-none");
            errorElement.innerHTML = "Passwords do not match.";
        }
        return;
    }

    console.log("Form submitted successfully!");
    this.submit();
});
