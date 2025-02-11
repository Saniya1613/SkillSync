document.addEventListener("DOMContentLoaded", () => {
    const userEmail = sessionStorage.getItem("loggedInUser");
    if (!userEmail) {
        window.location.href = "index.html"; // Redirect if not logged in
    } else {
        document.getElementById("userEmail").textContent = userEmail;
    }

    const learningForm = document.getElementById("learningForm");
    const learningList = document.getElementById("learningList");
    const logoutBtn = document.getElementById("logoutBtn");

    // Load saved learning entries
    const savedEntries = JSON.parse(localStorage.getItem(userEmail + "_learningLog")) || [];
    savedEntries.forEach(entry => addEntryToList(entry));

    learningForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("learningTitle").value;
        const details = document.getElementById("learningDetails").value;
        const entry = { title, details, timestamp: new Date().toLocaleString() };

        savedEntries.push(entry);
        localStorage.setItem(userEmail + "_learningLog", JSON.stringify(savedEntries));
        addEntryToList(entry);
        learningForm.reset();
    });

    function addEntryToList(entry) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${entry.title}</strong> - ${entry.details} <br> <small>${entry.timestamp}</small>`;
        learningList.appendChild(li);
    }

    logoutBtn.addEventListener("click", () => {
        sessionStorage.removeItem("loggedInUser");
        window.location.href = "login.html"; // Redirect to login
    });
});