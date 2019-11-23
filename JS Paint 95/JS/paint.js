var canvas = document.getElementById("canvas");
var paints = document.getElementsByClassName("color");
var selectedColor = "blue";
var btn = document.getElementsByClassName("btn");
var drawHeight = "10px";
var drawWidth = "10px";
var isMouseDown = false;

function start() {
    isMouseDown = true;
}

canvas.addEventListener("mousedown", start);

function drawing(event) {

    var positionX = event.pageX;
    var positionY = event.pageY;

    if (isMouseDown === true) {

        var drawDiv = document.createElement("div");
        drawDiv.style.backgroundColor = selectedColor;

        drawDiv.style.height = drawHeight;
        drawDiv.style.width = drawWidth;
        drawDiv.style.borderRadius = "50%";

        drawDiv.style.position = "absolute";
        drawDiv.style.left = `${positionX}px`;
        drawDiv.style.top = `${positionY}px`;

        canvas.appendChild(drawDiv);
    };
}

canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", drawing);

function stop() {
    isMouseDown = false;
};

canvas.addEventListener("mouseup", stop);

//change color
function changeColor(event) {
    selectedColor = event.target.id;
}

for (var i = 0; i < paints.length; i++) {
    paints[i].addEventListener("click", changeColor);
};

//change brush/eraser size
function changeBrushSize() {
    var brushsize = event.target.id;
    if (brushsize === "small") {
        drawHeight = "5px";
        drawWidth = "5px";
    }
    else if
        (brushsize === "medium") {
        drawHeight = "20px";
        drawWidth = "20px";
    }
    else if
        (brushsize === "large") {
        drawHeight = "50px";
        drawWidth = "50px";
    }
}

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", changeBrushSize);
};
