function on() {
  var menunBar = document.getElementById('menuBar');

  var overlay = document.getElementById('overlay');

  menunBar.classList.toggle('menuBarStyle');
  overlay.classList.toggle('overlayStyle');
}

const rootStyles = document.querySelector(':root');
function handleWindowResize() {
  const scrollSectionWidth = document.querySelector('.scroll-section').clientWidth;
  rootStyles.style.setProperty('--scroll-section-width', `${scrollSectionWidth}px`);
}
handleWindowResize();
window.addEventListener('resize', handleWindowResize);

const brands = document.querySelector('ul.brands'),
  total_brand = brands.children.length;
document.documentElement.style.setProperty('--total-brand', total_brand);

for (let i = 0; i < total_brand; i++) {
  brands.appendChild(brands.children[i].cloneNode(true));
}
