const slider = document.getElementById("slider");
let gridSize = slider.value;
slider.addEventListener('input', function() {setGridSize(slider.value)});



function setGridSize (gridSize) {
    const grid = document.getElementById("gameArea");
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; //rows are set to auto
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


window.addEventListener("load", setGridSize(gridSize));