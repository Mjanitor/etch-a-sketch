const container = document.getElementById('container');
const toolbar = document.getElementById('toolbar');

let numCells = 16;   // The amount of Div items for sketching
container.setAttribute("style", `grid-template-columns: repeat(${numCells}, 1fr); grid-template-rows: repeat(${numCells}, 1fr);`);


// Create the Pen Size Button
let size = document.createElement('button');
size.textContent = "Change Pen Size";

// Pen Size
size.onclick = function() {
    container.innerHTML = "";
    let numCells = prompt("Enter a number.  The larger the number, the smaller the brush.", 16);
    container.setAttribute("style", `grid-template-columns: repeat(${numCells}, 1fr);`);

    makeGrid(numCells);
}

// Color Selector
let color = document.createElement("input");
color.setAttribute("type", "color");

// Rainbow Coloration Checkbox
let rainbow = document.createElement("input");
rainbow.setAttribute("type", "checkbox");

// Rainbow Text
let p = document.createElement('p');
p.textContent = "Rainbow Mode?";

toolbar.appendChild(size);
toolbar.appendChild(color);
toolbar.appendChild(p);
toolbar.appendChild(rainbow);


makeGrid(numCells);  // run the function


// Function to create an 16x16 Grid of cells
function makeGrid(cells) {
    for (let i = 0; i < cells**2; i++) {
        let cell = document.createElement('div');
        // Assign each cell an ID
        cell.id = "grid" + [i];
        // Define CSS elements to apply mouseover properties
        let count = 0;   // Alpha variable
        cell.onmouseover = function() {
            if (!rainbow.checked) {
                // Pen Color is whatever color is selected
                cell.style.backgroundColor = color.value;
            }
            else {
                // Defining random coloration
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);

                //Output
                cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        }
        // Attach the div to the container
        container.appendChild(cell);
    }
}


//TODO: Create a button that wipes the canvas
//TODO: Make a slider for the pen size that isn't counterintuitive
//TODO: Clicking disables the pen
//TODO: Make it not look like shit