const container = document.getElementById('container');

// Define container grid styling
container.setAttribute("style", "display: grid; grid-template-columns: repeat(16, 20px); grid-template-rows: repeat(16, 20px);\
margin: 0 33%; border: 2px solid black;");

let numCells = 256;   // The amount of Div items for sketching

// Create an 16x16 Grid of divs
for (let i = 0; i < numCells; i++) {
    let cell = document.createElement('div');
    // Assign each cell an ID
    cell.id = "grid" + [i];
    // Define CSS elements to apply mouseover properties
    cell.setAttribute("style", "height: 20px; width: 20px; border-bottom: 1px solid black; border-right: 1px solid black;");
    cell.onmouseover = function() {
        cell.style.backgroundColor = "red";
    }
    // Attach the div to the container
    container.appendChild(cell);
}

//TODO: Give a Border to the container
//TODO: Create the Toolbar div
//TODO: Create buttons for the toolbar