const cena = document.querySelector("#cena");
const clearCart = document.querySelector('#clear-cart');

window.addEventListener("DOMContentLoaded", () => {
    const alt = localStorage.getItem("danya")
    cena.innerText = alt
})

clearCart.addEventListener('click', () => {
    localStorage.setItem('danya', '0');
    cena.innerText = '0'
})
