document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const rememberMeCheckbox = document.getElementById("rememberMe");

    if (localStorage.getItem("rememberedEmail")) {
        emailInput.value = localStorage.getItem("rememberedEmail");
        rememberMeCheckbox.checked = true;
    }

    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = emailInput.value;
        const password = document.getElementById("password").value;

        if (email && password) {
            if (rememberMeCheckbox.checked) {
                localStorage.setItem("rememberedEmail", email);
            } else {
                localStorage.removeItem("rememberedEmail");
            }

            alert("Login successful!");
            // Add your login here
        } else {
            alert("Please fill out all fields.");
        }
    });
});
