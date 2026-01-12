
document.addEventListener('DOMContentLoaded', () => {

  async function loadCatalogData() {
    try {
      const response = await fetch('/data/products/catalog-main.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (!Array.isArray(data)) {
        console.warn('Данные не являются массивом!', data);
        return [];
      }

      return data;

    } catch (error) {
      console.error('Ошибка загрузки JSON:', error);
      return [];
    }
  }

  function renderCatalogMain(catalog) {
    if (!Array.isArray(catalog)) {
      console.error('catalog должен быть массивом:', catalog);
      return;
    }

    const container = document.querySelector('#catalog-main');
    if (!container) {
      console.error('Контейнер #catalog-main не найден');
      return;
    }

    // 3. Очищаем контейнер
    container.innerHTML = '';

    catalog.forEach(product => {
      const catalogItem = document.createElement('li');
      catalogItem.classList.add('catalog-main__card');
      catalogItem.innerHTML = 
      `
        <div class="catalog-main__img-box">
          <img class="catalog-main__img" 
          src="${product.image}" 
          alt="${product.alt}">
        </div>

        <h4 class="catalog-section-title">${product.title}</h4>
      `;
      container.appendChild(catalogItem)
    });
  }

  // Использование
  loadCatalogData().then(catalog => {
    renderCatalogMain(catalog);
  });

})