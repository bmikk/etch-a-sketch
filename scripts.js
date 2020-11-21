
const gridContainer = document.querySelector('#gridContainer');

const button = document.querySelector('#btn');
button.addEventListener('click', createNewGrid);

const button2 = document.querySelector('#btn2');
button2.addEventListener('click', deleteGrid);


    
function createFirstGrid() {
    for (let i = 0; i < 16*16; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridContainer.appendChild(gridItem);
    }
}


function createNewGrid() {
    let value = prompt("How many squares should one side of the new grid be?");
    //now we need to re-size the grid based on the input
    gridContainer.setAttribute('style', 'grid-template-columns: repeat(${value}, 2fr); grid-template-rows: repeat(${value}, 2fr);');
    for (let y = 0; y < value*value; y++) { //create (y) divs, each nested into the grid container
        //create a div, append it to grid container
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridContainer.appendChild(gridItem);
        } 
}


function deleteGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

createFirstGrid();



