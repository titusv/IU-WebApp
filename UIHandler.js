const brushSizeInput = document.getElementById("brush-size-input");
const colorInput = document.getElementById("color-input");
const paintBtn = document.getElementById("btn-paint");

const paintBtnText = 'FONT SIZE: ';
//let colorInput = document.querySelector("#color");
let color = '#000000';
let brushSize = 1;
let transfersPerSecond = 10;

let mousedownID = -1;


onload = function (){
    brushSizeInput.innerHTML = paintBtnText + '1';
}

console.log('starte UI Handler');

colorInput.addEventListener('input', () => {
    color = colorInput.value;
});

brushSizeInput.addEventListener('click', () => {
    if(brushSize === 5){
        brushSize = 0;
    }
    brushSize++;
    brushSizeInput.innerHTML = paintBtnText + brushSize;
});

paintBtn.onmousedown = onPaintDown;
paintBtn.onmouseup = onPaintUp;
paintBtn.addEventListener('touchstart', onPaintDown);
paintBtn.addEventListener('touchend',onPaintUp);

function onPaintDown(){
    console.log("color: " + color);
    console.log("brush size: " +brushSize);

    if(mousedownID === -1){
        mousedownID = setInterval(whileMouseDown, 1000/transfersPerSecond);
    }
}
function onPaintUp(){
    console.log("onPaintUp");
    if(mousedownID !== -1){
        clearInterval(mousedownID);
        mousedownID = -1;
    }
}

function whileMouseDown(){
    // TODO Script zum verarbeiten der Daten ausführen und Werte "BrushSize,Color, Koordinaten" übergeben
    console.log("holding");
}
