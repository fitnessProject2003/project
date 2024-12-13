document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const rememberMeCheckbox = document.getElementById("rememberMe");

    if (localStorage.getItem("rememberedEmail")) {
        emailInput.value = localStorage.getItem("rememberedEmail");
        rememberMeCheckbox.checked = true;
    }

    document.querySelector("form").addEventListener("submit", function (e) {
        const email = emailInput.value;
        const password = document.getElementById("password").value;

        console.log("Email:", email); 
        console.log("Password:", password); 

        if (email && password) {
            if (rememberMeCheckbox.checked) {
                localStorage.setItem("rememberedEmail", email);
            } else {
                localStorage.removeItem("rememberedEmail");
            }

        
        } else {
            alert("Please fill out all fields.");
            e.preventDefault(); 
        }
    });
});
