
let slider = document.getElementById("slider");
let gridSize = slider.value;
slider.addEventListener('input', function() {setGridSize(slider.value)});
console.log(slider.value);


function setGridSize (gridSize) {
    const grid = document.getElementById("gameArea");
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    gridSquares(gridSize);
}

function gridSquares (gridSize) {
    let size = gridSize * gridSize;
    let currentDivs = document.getElementsByClassName("box").length;
    const parentDiv = document.getElementById("gameArea");

    if ( size > currentDivs) {
        for (let i = currentDivs; i < size; i++) {
            const divOne = document.createElement("div");
            divOne.className = "box";
            document.getElementById("gameArea").appendChild(divOne);
        }
    }
    else if (size < currentDivs) {
        for (let i = size; i < currentDivs; i++) {
            parentDiv.removeChild(parentDiv.lastElementChild);
        }
    }
    else {}
   
}

function colorGray () {
    let hoverBox = document.getElementsByClassName("box");
    let listBox = [...hoverBox];
    listBox.forEach(element => {
        element.addEventListener('mouseover', ()=> {
            element.style.backgroundColor = 'darkgray';
        })
    })
}


/*function main () {
    
    setGridSize();
    gridSquares();
    colorGray();
}*/

//window.addEventListener("load", main);