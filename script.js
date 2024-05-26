// create a 16x16 grid of square divs via DOM manipulation;

const body = document.querySelector("body");
const style = document.styleSheets[0];
const gridBttn = document.querySelector(".gridSelector");

let container = document.createElement("div");
container.classList.add("container")
body.appendChild(container);

gridBttn.addEventListener("click", bttnClick);

// Define a function to get the user input to select the size of the sketchpad grid.;
// Function will need to ensure the input is a number between 1 and 100, and handle edge cases such as trailing spaces;
function getUserInput() {
    let gridPrompt = "To select the number of rows and columns in your sketchpad, please enter a number " +
    "between 1 and 100:";
    let userInput;

    do {
        userInput = prompt(gridPrompt);
    } while (userInput === null 
        || isNaN(userInput) 
        || userInput.trim() === "" 
        || Number(userInput) < 1 
        || Number(userInput) > 100);

    return Number(userInput.trim());
}

// Want to avoid duplicate code, so use nested for loops to create our grid;
// Used row + column boxes in order to ensure each row has the correct number of boxes;
// Alternative would be to not define the number in a row and instead make boxes directly into container and let;
// the container flex-wrap - but this doesn't guarantee a fixed number of elements per row;
function createGrid(userInput) {

    //remove the grid if a grid already exists;
    container.innerHTML = "";

    for (i=1; i<=userInput; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (j=1; j<=userInput; j++) {
            let box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
            box.addEventListener("mouseenter", color);
            function color () {
                // select a random rgb value for the box upon every mouseenter;
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                box.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b +")";
            }
        }
        container.appendChild(row);
    }
}

function bttnClick() {
    let userInput;
    userInput = getUserInput();
    createGrid(userInput);
}

// Modifying the CSS stylesheet via JS;
style.insertRule("body {margin: 0; box-sizing: border-box;}")
style.insertRule(".container {max-width: 1200px; max-height: 1200px; width: 100%; margin: 10px; display: flex; flex-direction: column; justify-content: center; align-items: center;}");
style.insertRule(".row {display: flex; flex:1; width: 100%; justify-content: center}")
style.insertRule(".box {min-height: 5px; min-width: 5px; height: 10px; width: 10px; background-color: white; flex-shrink: 1; border: 1px solid black;}");