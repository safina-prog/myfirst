let totalPrice = 0;

function addToCart(button, price) {
    const parent = button.parentElement;
    const controls = parent.querySelector('div');
    button.classList.add('d-none');
    controls.classList.remove('d-none');
    updateTotal(price);
}

function increaseQuantity(button, price) {
    const quantityElement = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotal(price);
}

function decreaseQuantity(button, price) {
    const quantityElement = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
        updateTotal(-price);
    } else {
        const controls = button.parentElement;
        const addButton = controls.parentElement.querySelector('.btn-primary');
        controls.classList.add('d-none');
        addButton.classList.remove('d-none');
        updateTotal(-price);
    }
}

function updateTotal(amount) {
    totalPrice += amount;
    document.getElementById('totalPrice').textContent = totalPrice;
}
function calculateTotal() {
    const finalPriceElement = document.getElementById('finalPrice');
    finalPriceElement.textContent = totalPrice; // Отображаем итоговую сумму
}