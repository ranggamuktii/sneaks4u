// Logo
const brands = document.querySelector('ul.brands'),
  total_brand = brands.children.length;
document.documentElement.style.setProperty('--total-brand', total_brand);

for (let i = 0; i < total_brand; i++) {
  brands.appendChild(brands.children[i].cloneNode(true));
}

function addToCart(name, price, image, quantity = 1) {
  // Ambil data keranjang dari localStorage atau inisialisasi jika belum ada
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Cari apakah item sudah ada di dalam keranjang
  let existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.totalPrice = existingItem.price * existingItem.quantity;
  } else {
    let totalPrice = price * quantity;
    cart.push({ name: name, price: price, image: image, quantity: quantity, totalPrice: totalPrice });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
}

function showAddedToCartPopup(productName, item) {
  const popup = document.createElement('div');
  popup.classList.add('added-to-cart-popup');
  popup.innerHTML = `
    <div class="popup-content">
      <span class="close-popup">&times;</span>
      <div class="row align-items-center">
        <div class="col-md-2">
          <img src="${item.image}" alt="${item.name}" style="width:100px;">
        </div>
        <div class="col-md-4">
          <p>${item.name}</p>
        </div>
        <div class="col-md-2">
          <p>${formatRupiah(item.price)}</p>
        </div>
        <div class="col-md-2">
          <span class="mx-2">${item.quantity}</span>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(popup);

  // Hilangkan popup setelah beberapa detik
  setTimeout(() => {
    popup.remove();
  }, 3000); // Hilangkan setelah 3 detik (3000 milidetik)
}
