// Default grid value
let totalDiv = 16;

const newInput = document.querySelector(".numberInput");
const gridContainer = document.querySelector('.new-grid-container');
const makeSquares = document.querySelector(".make-squares-btn");
const resetButton = document.querySelector(".reset-btn");
const randomColorsButton = document.querySelector(".random-colors-btn");
const opacityIncreaseButton = document.querySelector(".opacity-increase-btn");
const randomAndOpacityButton = document.querySelector(".random-and-opacity-btn")

// Automatically focus the input field when the page loads
document.addEventListener("DOMContentLoaded", () => {
    newInput.focus();
});

// Event listeners
// Click event for makeSquares button
makeSquares.addEventListener("click", () => {
    const newValue = parseInt(newInput.value, 10) || 16; // Default to 16
    readInput(newValue);
    document.querySelector(".current-input").textContent = `${newValue} x ${newValue}`;
    newInput.value = "";
});

// Resets back to default mode
resetButton.addEventListener("click", () => {
    totalDiv = 16;
    document.querySelector(".current-input").textContent = `${totalDiv} x ${totalDiv}`;
    newInput.value = "";
    makeNewGrid(totalDiv);
});

// Keydown event for the input field
newInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const newValue = parseInt(newInput.value, 10) || 16; // Default to 16;
        readInput(newValue);
        newInput.value = "";
        document.querySelector(".current-input").textContent = `${newValue} x ${newValue}`;
    }
});

// Generate the grid
function makeNewGrid(totalDiv) {
    gridContainer.innerHTML = ""; // Clear previous grid

    // Create and append the squares
    for (let i = 0; i < totalDiv * totalDiv; i++ ) {
        const newGrid = document.createElement("div");
        newGrid.className = "new-grid";
        gridContainer.appendChild(newGrid)
    };
    // Resize every square dynamically so it fits inside the given field
    function resizeSquares(totalDiv) {
        const allSquares = document.querySelectorAll(".new-grid"); // Select all squares
        const squareSize = 700 / totalDiv; // Calculate size per square

        allSquares.forEach(square => {
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
        });
    };
    // TODO: Starting to implement the color change on hover logic
    // still got to add the event listener to it
    function changeColorOnHover(colorChoice) {
        const newGrid = document.querySelector(".new-grid");
        newGrid.addEventListener("hover", () => {
            const defaultColor = `black`;
            colorChoice = defaultColor;
            document.querySelector(".new-grid").style.color = `${colorChoice}`;
        });



    }
    // Make sure it fits inside the grid-container
    resizeSquares(totalDiv);
    changeColorOnHover();

};

// Prevent the input from being lower than 0 and higher than 100
function validateInput(input) {
    // Remove non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, "");

    // Enforce max value of 100
    if (input.value > 100) {
        input.value = 100;
    }
};

// Remake the grid with value given by the user
function readInput(newValue) {
    totalDiv = newValue;
    makeNewGrid(totalDiv);
};

// Default grid and mode starting as you open the application
makeNewGrid(totalDiv);

// Todo:
// 1. Make the input change the number of squares made                           DONE
// 2. Make the squares change size to fit in the 700x700 grid-container we made  DONE
// 3. Implement hover for default color
// 3. Implement hover for changing color
// 4. Implement Random Colors function
// 5. Implement Opacity Increase function
// 6. Implement Random Colors + Opacity Increase function
// 7. Finish design
// 8. Push and enable live preview 

/*
newInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        makeNewGrid();
    }
});
makeSquaresButton = document.getElementById(".make-squares-btn");
makeSquaresButton.addEventListener("click", () => {
    makeNewGrid();
}); */