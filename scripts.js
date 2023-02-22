const gridSize = 16;



function setGridSize () {
    const grid = document.getElementById("gameArea");
    grid.style.gridTemplateColumns = "repeat(gridSize, 1fr)";
    grid.style.gridTemplateRows = "repeat(gridSize, 1fr)";
}

function gridSquares () {
    let size = gridSize * gridSize;
    for (let i = 0; i < size; i++) {
        const divOne = document.createElement("div");
        divOne.className = "box";
        document.getElementById("gameArea").appendChild(divOne);
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


function main () {
    setGridSize();
    gridSquares();
    colorGray();
}

window.addEventListener("load", main);