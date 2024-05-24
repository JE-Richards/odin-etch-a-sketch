// create a 16x16 grid of square divs via DOM manipulation;

const body = document.querySelector("body");
const style = document.styleSheets[0];

let container = document.createElement("div");
container.classList.add("container")
body.appendChild(container);

// Want to avoid duplicate code, so use nested for loops to create our grid;
// Used row + column boxes in order to ensure each row has the correct number of boxes;
// Alternative would be to not define the number in a row and instead make boxes directly into container and let 
// the container flex-wrap - but this doesn't guarantee a fixed number of elements per row;
for (i=1; i<=16; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (j=1; j<=16; j++) {
        let box = document.createElement("div");
        box.classList.add("box");
        row.appendChild(box);
    }
    container.appendChild(row);
}

// Modifying the CSS stylesheet via JS
style.insertRule("body {margin: 0; box-sizing: border-box;}")
style.insertRule(".container {max-width: 800px; margin: 10px;}");
style.insertRule(".row {display: flex; gap: 10px; margin: 10px auto; flex:1;}")
style.insertRule(".box {width: 50px; height: 50px; background-color: white; flex-shrink: 1; border: 1px solid black;}");