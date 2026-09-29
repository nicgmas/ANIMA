document.addEventListener("DOMContentLoaded", () => {

  const cartDisplay = document.getElementById("cartCount");
  const buttons = document.querySelectorAll(".add-to-cart");
  const cartPanel = document.getElementById("cartPanel");
  const cartItems = document.getElementById("cartItems");
  const closeCart = document.getElementById("closeCart");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCart() {
    cartDisplay.textContent = `Sacola (${cart.length})`;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    syncButtons();
  }

  function renderCart() {
    cartItems.innerHTML = "";

    cart.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${item.name} - R$ ${item.price}</span>
        <span class="remove-item" data-id="${item.id}">remover</span>
      `;
      cartItems.appendChild(li);
    });

    cartItems.querySelectorAll(".remove-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        cart = cart.filter(i => i.id !== btn.dataset.id);
        updateCart();
      });
    });
  }

  function syncButtons() {
    buttons.forEach((button) => {
      const exists = cart.some(item => item.id === button.dataset.id);
      button.textContent = exists ? "Remover" : "Adicionar";
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const { id, name, price } = button.dataset;

      if (cart.some(item => item.id === id)) {
        cart = cart.filter(item => item.id !== id);
      } else {
        cart.push({ id, name, price: Number(price) });
      }

      updateCart();
    });
  });

  cartDisplay.addEventListener("click", () => cartPanel.classList.add("active"));
  closeCart.addEventListener("click", () => cartPanel.classList.remove("active"));

  updateCart();
});
