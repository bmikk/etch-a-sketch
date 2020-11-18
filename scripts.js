//ok, here we go! what are our guidelines here?
//Grid needs to be flexible, so that number of squares created will be variable depending on user input, but starting with 16x16
//This means that we need a function that can be called to make the divs
//need a button that will clear the CSS changes caused by the mouse hovering, creating a blank canvas of the same squares again
//also need a button that will clear the grid, and then call for a new grid using the user's input to get the number of squares
//crucially here, need to decide on the exact specifications of what a square will be
const gridContainer = document.querySelector('#gridContainer');

const button = document.querySelector('#btn');
button.addEventListener('click', createGrid(prompt("How big should the grid be? Enter a number between 0-100.")));

const button2 = document.querySelector('#btn2');
button2.addEventListener('click', deleteGrid());


//what's the logic for function needed to create the grid?
    //well, it would need to take X, and create a line of X divs, X times.

let deleteGrid = () => {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
    }
    
//So we create the function
function createGrid (x) {
    //now, start a loop that will append child elements to this first div
    for (let i = 0; i < x; i++) { //this loop creates a number of divs, with each div serving as the first in the line
        //create a div, append it to our root div
        let vertDiv = document.createElement('div');
        gridContainer.appendChild(vertDiv);
        for (let y = 0; y < x; y++) { //create (x - 1) divs, each nested into the previous parent div and arranged in a line
            //create a div, append it to "vertDiv"
            let horDiv = document.createElement('div');
            vertDiv.appendChild(horDiv);
        }         
    }
    //and that's it? We have all our divs? YEP!
}

//need a function that will delete whatever grid that's currently on the page
