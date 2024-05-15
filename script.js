// Створюємо об'єкт кошика
var cart = [];

// Функція для додавання товару до кошика
function updateCart() {
    var cartList = document.getElementById('cartItems');
    cartList.innerHTML = ''; // Очищаємо список перед додаванням нових товарів
    for (var i = 0; i < cart.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = cart[i];
        cartList.appendChild(listItem);
    }
}

// Функція для оновлення списку товарів у кошику на сторінці кошика
function updateCart() {
    var cartList = document.getElementById('cartItems');
    cartList.innerHTML = ''; // Очищаємо список перед додаванням нових товарів
    for (var i = 0; i < cart.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = cart[i];
        cartList.appendChild(listItem);
    }
}
