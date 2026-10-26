
const products = [
  { id: 1, title: 'Ноутбук 15"', category: 'Компьютеры', price: 85000 },
  { id: 2, title: 'Монитор 27"', category: 'Компьютеры', price: 28000 },
  { id: 3, title: 'Клавиатура', category: 'Аксессуары', price: 6500 },
  { id: 4, title: 'Мышь беспроводная', category: 'Аксессуары', price: 2500 },
  { id: 5, title: 'Honor 99 Pro', category: 'Телефоны', price: 300000 },
  { id: 6, title: 'Телефон Ракета Турбо Плюс', category: 'Телефоны', price: 600 }
];

const cart = [];

const catalog = document.getElementById('catalog');
const cartCount = document.getElementById('cart-count');
const cartSum = document.getElementById('cart-sum');
const clearCart = document.getElementById('clear-cart');

function renderProducts() {
  catalog.innerHTML = products.map(p => `
    <div class="card">
      <div class="category">${p.category}</div>
      <h3>${p.title}</h3>
      <div class="price">${p.price.toLocaleString('ru-RU')} ₽</div>
      <button data-id="${p.id}">В корзину</button>
    </div>
  `).join('');
}

function renderCart() {
  cartCount.textContent = cart.length;

  cartSum.textContent = cart
    .reduce((sum, p) => sum + p.price, 0)
    .toLocaleString('ru-RU');
}

catalog.addEventListener('click', e => {
  if (e.target.tagName !== 'BUTTON') return;

  const product = products.find(
    p => p.id === Number(e.target.dataset.id)
  );

  if (product) {
    cart.push(product);
    renderCart();
  }
});

clearCart.addEventListener('click', () => {
  cart.length = 0;
  renderCart();
});

renderProducts();
renderCart();
