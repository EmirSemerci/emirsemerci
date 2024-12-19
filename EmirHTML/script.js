let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalPriceElem = document.getElementById("total-price");

    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - ${item.price}₺`;
        cartList.appendChild(li);
    });

    totalPriceElem.textContent = `Toplam: ${totalPrice}₺`;
}

function checkout() {
    alert('İşlem Gerçekleşti! Teşekkür ederiz.');
    cart = [];
    totalPrice = 0;
    updateCart();
}
function showInfo(product) {
    let infoText = '';

    switch (product) {
        case 'Processor':
            infoText = 'Description: The brain of the computer; it processes instructions and runs programs.';
            break;
        case 'Motherboard':
            infoText = 'Description: The main circuit board that connects all components of the computer.';
            break;
        case 'RAM':
            infoText = 'Description: Temporary storage for data; it helps programs run faster.';
            break;
        case 'Storage Device':
            infoText = 'Description: A device used for permanent storage of data and files.';
            break;
        case 'Graphics Card':
            infoText = 'Description: Handles rendering of images, videos, and 3D graphics; essential for gaming and design.';
            break;
        case 'Power Supply':
            infoText = 'Description: Supplies electrical power to all computer components.';
            break;
        case 'Cooling System':
            infoText = 'Description: Prevents components like the processor from overheating.';
            break;
        case 'Sound Card':
            infoText = 'Description: Processes and enhances audio signals for playback and recording.';
            break;
        case 'Case':
            infoText = 'Description: The external structure that houses and protects all computer components.';
            break;
        case 'Keyboard':
            infoText = 'Description: Input device used to type and interact with the computer.';
            break;
        case 'Mouse':
            infoText = 'Description: Input device for pointing, clicking, and navigating on the screen.';
            break;
        case 'Monitor':
            infoText = 'Description: Displays visual output from the computer to the user.';
            break;
        case 'Network Card':
            infoText = 'Description: Enables the computer to connect to networks and the internet.';
            break;
        default:
            infoText = 'No additional information available.';
    }

    alert(infoText);
}
