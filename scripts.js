const slider = document.getElementById("slider");
let gridSize = slider.value;
slider.addEventListener('input', function() {setGridSize(slider.value)});


function setGridSize (gridSize) {
    const grid = document.getElementById("gameArea");
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; //rows are set to auto
    gridSquares(gridSize);
    clearGrid();
}

function gridSquares (gridSize) {
    let size = gridSize * gridSize;
    let currentDivs = document.getElementsByClassName("box").length;
    const parentDiv = document.getElementById("gameArea");

    if ( size > currentDivs) {
        for (let i = currentDivs; i < size; i++) {
            const divOne = document.createElement("div");
            divOne.className = "box";
            divOne.id = "square";
            document.getElementById("gameArea").appendChild(divOne);
        }
    }
    else if (size < currentDivs) {
        for (let i = size; i < currentDivs; i++) {
            parentDiv.removeChild(parentDiv.lastElementChild);
        }
    }
      
}

function clearGrid () {
    let hoverBox = document.getElementsByClassName("box");
    let listBox = [...hoverBox];
    listBox.forEach(element => {
        element.removeEventListener('mouseover', penGray);
        element.removeEventListener('mouseover', penRainbow);
        element.classList.remove("grayBG");
            
    });
}

function colorGray () {
    clearGrid();
    let hoverBox = document.getElementsByClassName("box");
    let listBox = [...hoverBox];
    listBox.forEach(element => {
        element.addEventListener('mouseover', penGray);
    })
}

function penGray (e) {
    let element = e.target;
    element.classList.add("grayBG");
}

function colorRainbow () {
    clearGrid();
    let hoverBox = document.getElementsByClassName("box");
    let listBox = [...hoverBox];
    listBox.forEach(element => {
        element.addEventListener('mouseover', penRainbow);
    })
}

function penRainbow (e) {
    let element = e.target;
    let color = randomColor();
    element.style.backgroundColor = color;
}

function colorDarken () {
    clearGrid();
    let hoverBox = document.getElementsByClassName("box");
    let listBox = [...hoverBox];
    listBox.forEach(element => {
        element.addEventListener('mouseover', penDarken);
    })
}

function penDarken (e) {
    let element = e.target;
    let i = 190;
    element.style.backgroundColor = `rgb(${i},${i},${i})`;
    i -= 10;
}

function randomColor () {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}


function onLoad () {
    setGridSize(gridSize);
}


window.addEventListener("load", onLoad());



