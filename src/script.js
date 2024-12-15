// Default grid value generation
const totalDiv = 16;
const gridContainer = document.querySelector('.new-grid-container');

// Generate the grid
function makeNewGrid(totalDiv) {
    for (let i = 0; i < totalDiv * totalDiv; i++ ) {
        const newGrid = document.createElement('new-grid');
        newGrid.className = 'new-grid';
        gridContainer.appendChild(newGrid)
    }
};

// Prevent the input from being lower than 0 and higher than 100
function validateInput(input) {
    // Remove non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, '');

    // Enforce max value of 100
    if (input.value > 100) {
        input.value = 100;
    }
};

makeNewGrid(totalDiv);

// Todo:
// 1. Make the input change the number of squares made
// 2. Make the squares change size to fit in the 700x700 grid-container we made
// 3. Implement Random Colors function
// 4. Implement Opacity Increase function
// 5. Implement Random Colors + Opacity Increase function
// 6. Finish design
// 7. Push and enable live preview 