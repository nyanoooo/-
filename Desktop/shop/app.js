const products = [
  { id: 1, title: 'Ноутбук 15"',       category: 'Компьютеры', price: 85000 },
  { id: 2, title: 'Монитор 27"',       category: 'Компьютеры', price: 28000 },
  { id: 3, title: 'Клавиатура',        category: 'Аксессуары', price: 6500 },
  { id: 4, title: 'Мышь беспроводная', category: 'Аксессуары', price: 2500 },
  { id: 5, title: 'Honor 99 Pro', category: 'Телефоны', price: 300000 },
  { id: 6, title: 'Электрическая расческа', category: 'Аксессуары', price: 200 },
  { id: 7, title: 'Микрофон про', category: 'Аксессуары', price: 10000},
  { id: 8, title: 'Ложка электрическая', category: 'Аксессуары', price: 10}
  { id: 9, title: 'Honor Ракета Turbo Pro', category: 'Телефоны', price: 20000}

];

const catalog = document.getElementById('catalog');

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

renderProducts();
catalog.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    const id = Number(event.target.dataset.id);
    const product = products.find(p => p.id === id);

    console.log(product.title);
  }
});