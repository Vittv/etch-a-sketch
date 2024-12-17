// Default grid value
let totalDiv = 16;

const newInput = document.querySelector(".numberInput");
const gridContainer = document.querySelector('.new-grid-container');
const makeSquares = document.querySelector(".make-squares-btn");
const clearButton = document.querySelector(".clear-btn");
const resetButton = document.querySelector(".reset-btn");
const blackColorButton = document.querySelector(".black-color-btn");
const randomColorButton = document.querySelector(".random-color-btn");
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
    document.querySelector(".current-input").textContent = `Scale: ${newValue} x ${newValue}`;
    newInput.value = "";
    document.querySelector(".current-color-mode").innerText = `Mode: Black`;
});

// Resets back to default mode
resetButton.addEventListener("click", () => {
    totalDiv = 16;
    document.querySelector(".current-input").textContent = `Scale: ${totalDiv} x ${totalDiv}`;
    newInput.value = "";
    makeNewGrid(totalDiv);
    document.querySelector(".current-color-mode").innerText = `Mode: Black`;
});

// Keydown event for the input field
newInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const newValue = parseInt(newInput.value, 10) || 16; // Default to 16;
        readInput(newValue);
        newInput.value = "";
        document.querySelector(".current-input").textContent = `Scale: ${newValue} x ${newValue}`;
    }
});

// Change to color black
blackColorButton.addEventListener("click", () => {
    makeNewGrid(totalDiv, "black");
    document.querySelector(".current-color-mode").innerText = `Mode: Black`;
});

// Change to random color
randomColorButton.addEventListener("click", () => {
    makeNewGrid(totalDiv, "random");
    document.querySelector(".current-color-mode").innerText = `Mode: Random`;
});

// Clear board
clearButton.addEventListener("click", () => {
    makeNewGrid(totalDiv, currentColorMode);
})

// Generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

// Clear and regenerate the grid with the current settings
function clearBoard() {
    gridContainer.innerHTML = ""; // Clear the grid container
    makeNewGrid(totalDiv, currentColorMode);
};

let currentColorMode = "black";

// Generate the grid
function makeNewGrid(totalDiv, colorMode = "black") {
    gridContainer.innerHTML = ""; // Clear previous grid
    currentColorMode = colorMode; // Update the current color mode

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

    // Hover functions
    function changeColorOnHover() {
        const allSquares = document.querySelectorAll(".new-grid"); // Select all squares
        allSquares.forEach(square => {
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "black"; // Change color on hover
            });
        });
    };
    // Change color to random colors
    function changeColorOnHoverRandom() {
        const allSquares = document.querySelectorAll(".new-grid"); // Select all squares
        allSquares.forEach(square => {
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = getRandomColor(); // Apply random color
            })
        })
    }

    if (colorMode === "black") {
        changeColorOnHover();
    } else if (colorMode === "random") {
        changeColorOnHoverRandom();
    }
    // Make sure it fits inside the grid-container
    resizeSquares(totalDiv);
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
makeNewGrid(totalDiv, "black");

// Todo:
// 01. Make the input change the number of squares made                           DONE
// 02. Make the squares change size to fit in the 700x700 grid-container we made  DONE
// 03. Implement hover for default color                                          DONE                                         
// 04. Implement Random Colors function                                           DONE
// 05. Implement Opacity Increase function
// 06. Implement Random Colors + Opacity Increase function
// 07. Finish design, make every selection button toggleable, instead of requiring a full reset
// 08. We could also add hotkeys to each button on the interface
// 09. Add a paint mode, which yes, will require remaking the whole thing, but it doesn't matter, this project is cool enough for that
// 10. Push and enable live preview 

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