const button = document.querySelector('#changeColorButton');
const button2 = document.querySelector("#changeTextButton");

const text = document.querySelector("#text");
button2.addEventListener("click", changetext);

const coLorBox = document.querySelector('#colorBox');
button.addEventListener("click", changeColor);

function changetext() {
    const newText = prompt("Enter a new text:");
    if (newText) {
        text.innerHTML = newText;
    } else {
        alert("Please enter a valid text");
    }
}







function changeColor() {
    const newColor = prompt("Enter a new color(red,blue,#00ff00):");
    if (newColor) {
        colorBox.style.backgroundColor = newColor;
    } else {
        alert("Please enter a valid color");
    }
}