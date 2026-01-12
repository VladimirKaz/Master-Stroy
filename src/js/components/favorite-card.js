document.addEventListener('DOMContentLoaded', () => {
  
  async function favoriteCardData() {
    try {
      const response = await fetch('/data/products/favorite-card.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (!Array.isArray) {
        console.warn('Данные не являются массивом!', data);
      }
      return data;
    } catch (error) {
      console.error('Ошибка загрузки JSON:', error)
    }
  }

  function renderFavoriteCard(card) {
    const container = document.querySelector('.favorites-list');

    container.innerHTML = '';

    card.forEach(cardItem => {
      const cardContent = document.createElement('li');
      cardContent.classList.add('favorites-list__item');
      cardContent.innerHTML = 
        `
        <article class="favorite-card">
          <!-- Media -->
      <div class="favorite-card__media">
        <div class="favorite-card__media-img">
          <img src="${cardItem.image}" alt="${cardItem.alt}">
        </div>

        <div class="favorite-card__description">
          <div class="favorite-card__title">
            <h4 class="favorite-card-title">${cardItem.title}</h4>
          </div>

          <div class="favorite-card__summary">
            <span class="favorite-card-summary">${cardItem.specifications.size}</span>
            <span class="favorite-card-summary">${cardItem.specifications.perSquareMeter}</span>
            <span class="favorite-card-summary">${cardItem.specifications.availableColorsCount}</span>
          </div>
          
          <div class="favorite-card__badges-list">
            <div class="favorite-card__badge favorite-card__badge--color1"></div>
            <div class="favorite-card__badge favorite-card__badge--color2"></div>
            <div class="favorite-card__badge favorite-card__badge--color3"></div>
            <div class="favorite-card__badge favorite-card__badge--color4"></div>
            <div class="favorite-card__badge favorite-card__badge--color5"></div>
            <div class="favorite-card__badge favorite-card__badge--color6"></div>
            <div class="favorite-card__badge favorite-card__badge--color7"></div>
            <div class="favorite-card__badge favorite-card__badge--color8"></div>
          </div>
        </div>
      </div>
    <!-- Action -->
      <div class="favorite-card__action">
        <div class="favorite-card__variants">
          <div class="favorite-card__variant-brown">
            <h5 class="favorite-card-variant">${cardItem.variants[0].color}</h5>
            <p class="favorite-card-price">${cardItem.variants[0].price}</p>
          </div>
          <div class="favorite-card__variant-red">
            <h5 class="favorite-card-variant">${cardItem.variants[1].color}</h5>
            <p class="favorite-card-price">${cardItem.variants[1].price}</p>
          </div>
          <div class="favorite-card__variant-brown">
            <h5 class="favorite-card-variant">${cardItem.variants[2].color}</h5>
            <p class="favorite-card-price">${cardItem.variants[2].price}</p>
          </div>
          <div class="favorite-card__variant-yellow">
            <h5 class="favorite-card-variant">${cardItem.variants[3].color}</h5>
            <p class="favorite-card-price">${cardItem.variants[3].price}</p>
          </div>
          <div class="favorite-card__variant-other">
            <h5 class="favorite-card-variant">${cardItem.variants[4].color}</h5>
            <p class="favorite-card-price">${cardItem.variants[4].price}</p>
          </div>
        </div>

        <button class="favorite-card__add-tobuy" type="button">
          <img src="${cardItem.btn.svg}" alt="${cardItem.btn.alt}">
        </button>
      </div>
      </article>
        `;

      container.appendChild(cardContent);
    });
  }

  favoriteCardData().then(card => {
    renderFavoriteCard(card);
  });
})