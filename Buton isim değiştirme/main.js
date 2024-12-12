const button = document.querySelector("button");

button.addEventListener("click", updateName);


function updateName() {
   
     const name = prompt("enter a new number");

  
     button.textContent = `Player 1: ${name}`;
}
