
const gridContainer = document.querySelector('#gridContainer');

const button = document.querySelector('#btn');
button.addEventListener('click', clearAndCreate);


const button2 = document.querySelector('#btn2');
button2.addEventListener('click', colorGrid);

const button3 = document.querySelector('#btn3');
button3.addEventListener('click', resetGrid);

    
function createFirstGrid() { //Creates initial grid of 16x16 squares.
    for (let i = 0; i < 16*16; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.addEventListener('mouseover', (e) => (e.target.style.backgroundColor = 'black'));
        gridContainer.appendChild(gridItem);
    }
}


function createNewGrid() { //Takes user prompt, resizes the grid, and then fills it with divs
    let value = prompt("How many squares should one side of the new grid be? Input a number between 1 and 100.");
    if (value > 100 || value < 1) {
        alert("Learn to read!");
    } //--> need to make an alert if a string is given
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${value}, 2fr); grid-template-rows: repeat(${value}, 2fr);`);
    for (let y = 0; y < value*value; y++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.addEventListener('mouseover', (e) => (e.target.style.backgroundColor = 'black'));
        gridContainer.appendChild(gridItem);
        } 
}


function deleteGrid() { //clears the grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


function resetGrid() {
    let childDivs = document.getElementsByClassName('gridItem');
    for (let i = 0; i < childDivs.length; i++) {
        childDivs[i].setAttribute('style', 'background-color: white');
    }
}


function colorGrid() {
    let childDivs = document.getElementsByClassName('gridItem');
    for (let i = 0; i < childDivs.length; i++) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16); //Neat method that converts a huge number into hexadecimal
        childDivs[i].addEventListener('mouseover', (e) => (e.target.style.backgroundColor = '#' + randomColor));
    }
}




function clearAndCreate () { //clunky way to combine the two functions for a single event listener
    deleteGrid();
    createNewGrid();
}


createFirstGrid();



