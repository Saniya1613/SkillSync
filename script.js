
document.addEventListener("DOMContentLoaded", () => {
    const loginContainer = document.querySelector(".login-container");
    const signupContainer = document.querySelector(".signup-container");
    const signupLink = document.getElementById("signupLink");
    const loginLink = document.getElementById("loginLink");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    // Toggle between Login and Signup forms
    signupLink.addEventListener("click", () => {
        loginContainer.classList.add("hidden");
        signupContainer.classList.remove("hidden");
    });

    loginLink.addEventListener("click", () => {
        signupContainer.classList.add("hidden");
        loginContainer.classList.remove("hidden");
    });

    // Signup Functionality
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        if (localStorage.getItem(email)) {
            alert("User already exists! Try logging in.");
        } else {
            localStorage.setItem(email, JSON.stringify({ password }));
            alert("Signup successful! Please log in.");
            signupContainer.classList.add("hidden");
            loginContainer.classList.remove("hidden");
        }
    });

    // Login Functionality
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const storedUser = JSON.parse(localStorage.getItem(email));

        if (storedUser && storedUser.password === password) {
            alert("Login successful!");
            sessionStorage.setItem("loggedInUser", email);
            window.location.href = "dashboard.html"; // Redirect to Dashboard
        } else {
            alert("Invalid email or password!");
        }
    });

    // Check if user is already logged in
    if (sessionStorage.getItem("loggedInUser")) {
        window.location.href = "dashboard.html";
    }
});



//dashboard

