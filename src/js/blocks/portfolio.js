document.addEventListener('DOMContentLoaded', () => {
  async function loadPortfolioData() {
    try {
      const response = await fetch('./data/products/portfolio.json')
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
    }
  }

  function renderPortfolio(portfolio) {
    const container = document.querySelector('.portfolio__list');

    container.innerHTML = '';

    portfolio.forEach(portfolioCase => {
      const portfolioCard = document.createElement('li');
      portfolioCard.classList.add('portfolio__card');
      portfolioCard.innerHTML = 
        `
          <a href="#!">
            <img class="portfolio__card-img" 
            src="${portfolioCase.image}" 
            srcset="${portfolioCase.imageSet}"
            alt="${portfolioCase.alt}">
          </a>
        `;
      container.appendChild(portfolioCard);
    });

  }

  loadPortfolioData().then(portfolio => {
    renderPortfolio(portfolio);
  })

})