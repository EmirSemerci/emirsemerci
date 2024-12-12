function createParagraph() {
    const para =document.createElement('p');
    para.textContent = 'Butona Bastın!';
    document.body.appendChild(para);
}
const buttons = document.querySelectorAll('button');
for(let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener('click', createParagraph);
}