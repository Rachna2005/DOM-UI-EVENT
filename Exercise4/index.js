// Hide a given element
function hide(element) {
    element.style.display = "none";
}

// Display a given element
function show(element) {
    element.style.display = "block";
}

// Get references to elements
const lostView = document.getElementById("lostView");
const passwordView = document.getElementById("passwordView");
const wonView = document.getElementById("wonView");
const buttonCheck = document.getElementById("checkButton");
const buttonTryAgain = document.getElementById("tryAgainButton");
const passwordInput = document.getElementById("passwordInput");

// Secret password
const secret = "54321";

// Retrieve stored data from localStorage
let chanceRemaining = parseInt(localStorage.getItem("chances")) || 3;
let hasWon = localStorage.getItem("hasWon") === "true";

// Check if the player has already lost or won on page load
if (hasWon) {
    hide(passwordView);
    show(wonView);
} else if (chanceRemaining <= 0) {
    hide(passwordView);
    show(lostView);
    hide(buttonTryAgain);
} else {
    buttonTryAgain.textContent =  `Try again! (${chanceRemaining} chances left)`;
}

// Event listener for Check Code button
buttonCheck.addEventListener("click", function () {
    const passwordEntered = passwordInput.value;

    if (passwordEntered === secret) {
        hide(passwordView);
        show(wonView);
        hide(lostView);
        localStorage.setItem("hasWon", "true"); // Store win status
    } else {
        chanceRemaining--;
        localStorage.setItem("chances", chanceRemaining); // Update chances in storage
        show(lostView);
        hide(wonView);
        hide(passwordView);
        buttonTryAgain.textContent =`Try again! (${chanceRemaining} chances left)`;

        if (chanceRemaining === 0) {
            hide(buttonTryAgain);
        }
    }
});

// Event listener for Try Again button
buttonTryAgain.addEventListener("click", function () {
    if (chanceRemaining > 0) {
        show(passwordView);
        hide(wonView);
        hide(lostView);
        passwordInput.value = "";
    } else {
        alert("You have no chances left! Refresh the page to start over.");
    }
});

// Reset localStorage when refreshing (optional)
buttonTryAgain.addEventListener("dblclick", function () {
    localStorage.removeItem("chances");
    localStorage.removeItem("hasWon");
    location.reload();
});