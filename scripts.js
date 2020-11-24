
const gridContainer = document.querySelector('#gridContainer');
   
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
    } //--> NEED TO SET LIMITS HERE
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${value}, 2fr); grid-template-rows: repeat(${value}, 2fr);`);
    for (let y = 0; y < value*value; y++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.addEventListener('mouseover', (e) => (e.target.style.backgroundColor = 'black'));
        gridContainer.appendChild(gridItem);
        } 
}


function deleteGrid() { //deletes all child divs
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


function resetGrid() { //sets the grid back to white
    let childDivs = document.getElementsByClassName('gridItem');
    for (let i = 0; i < childDivs.length; i++) {
        childDivs[i].setAttribute('style', 'background-color: white');
    }
}


function colorGrid() { //sets the grid to trigger random colors
    let childDivs = document.getElementsByClassName('gridItem');
    for (let i = 0; i < childDivs.length; i++) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16); //Neat method that converts a huge number into hexadecimal
        childDivs[i].addEventListener('mouseover', (e) => (e.target.style.backgroundColor = '#' + randomColor));
    }
}


function fadeGrid() { //we can use opacity to increment the shades, starting with black at 0%
    let childDivs = document.getElementsByClassName('gridItem');
    for (let i = 0; i < childDivs.length; i++) {
        childDivs[i].setAttribute('style', 'background-color: black');
        childDivs[i].style.opacity = "0";
        childDivs[i].addEventListener('mouseover', (e) => {
            let opacity = e.target.style.opacity;
            e.target.style.opacity = (Number(opacity) + 0.2).toString();
        })
    }
}    


function clearAndCreate () { 
    deleteGrid();
    createNewGrid();
}


createFirstGrid();


const button = document.querySelector('#btn');
button.addEventListener('click', clearAndCreate);

const button2 = document.querySelector('#btn2');
button2.addEventListener('click', colorGrid);

const button3 = document.querySelector('#btn3');
button3.addEventListener('click', resetGrid);

const button4 = document.querySelector('#btn4');
button4.addEventListener('click', fadeGrid);