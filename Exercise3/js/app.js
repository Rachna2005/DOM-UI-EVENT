document.addEventListener("DOMContentLoaded", function() {
    const createButton = document.getElementById("create"); // Select the "Create Card" button
    const container = document.querySelector(".container"); // Select the card container

    // Define an array of colors
    const COLORS = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "lime", "brown"];

    // Function to get a random color from the COLORS array
    function randomColor() {
        const randomIndex = Math.floor(Math.random() * COLORS.length);
        return COLORS[randomIndex];
    }

    // Function to create a new card
    function createCard() {
        // Create the main card div
        const card = document.createElement("div");
        card.classList.add("card"); // Add 'card' class
        card.style.backgroundColor = randomColor();

        // Add description paragraph
        const description = document.createElement("p");
        description.textContent = "Hello";

        // Create card footer
        const cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");

        // Create Remove Button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove Card";

        // Add event listener to the Remove Button
        removeButton.addEventListener("click", function() {
            container.removeChild(card); // Remove the card when the button is clicked
        });

        // Append elements together
        cardFooter.appendChild(removeButton);
        card.appendChild(description);
        card.appendChild(cardFooter);
        container.appendChild(card); // Add the new card to the container
    }

    // Attach click event to the "Create Card" button
    createButton.addEventListener("click", createCard);
});