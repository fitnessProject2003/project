document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("Email").value;
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const gender = document.getElementById("gender").value;


    document.querySelectorAll(".form-control").forEach(input => input.classList.remove("error"));

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;

    if (!passwordRegex.test(password)) {
        document.getElementById("password").classList.add("error");
        document.getElementById("confirmPassword").classList.add("error");
        alert("Password must be 8-16 characters long, with at least one uppercase letter and one number.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    this.submit();
});
