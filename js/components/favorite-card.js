document.addEventListener("DOMContentLoaded",()=>{(async()=>{try{var a,r=await fetch("../data/products/favorite-card.json");if(r.ok)return a=await r.json(),Array.isArray||console.warn("Данные не являются массивом!",a),a;throw new Error("HTTP error! status: "+r.status)}catch(a){console.error("Ошибка загрузки JSON:",a)}})().then(a=>{{let i=document.querySelector(".favorites-list");i.innerHTML="",a.forEach(a=>{var r=document.createElement("li");r.classList.add("favorites-list__item"),r.innerHTML=`
        <article class="favorite-card">
          <!-- Media -->
      <div class="favorite-card__media">
        <div class="favorite-card__media-img">
          <img src="${a.image}" alt="${a.alt}">
        </div>

        <div class="favorite-card__description">
          <div class="favorite-card__title">
            <h4 class="favorite-card-title">${a.title}</h4>
          </div>

          <div class="favorite-card__summary">
            <span class="favorite-card-summary">${a.specifications.size}</span>
            <span class="favorite-card-summary">${a.specifications.perSquareMeter}</span>
            <span class="favorite-card-summary">${a.specifications.availableColorsCount}</span>
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
            <h5 class="favorite-card-variant">${a.variants[0].color}</h5>
            <p class="favorite-card-price">${a.variants[0].price}</p>
          </div>
          <div class="favorite-card__variant-red">
            <h5 class="favorite-card-variant">${a.variants[1].color}</h5>
            <p class="favorite-card-price">${a.variants[1].price}</p>
          </div>
          <div class="favorite-card__variant-brown">
            <h5 class="favorite-card-variant">${a.variants[2].color}</h5>
            <p class="favorite-card-price">${a.variants[2].price}</p>
          </div>
          <div class="favorite-card__variant-yellow">
            <h5 class="favorite-card-variant">${a.variants[3].color}</h5>
            <p class="favorite-card-price">${a.variants[3].price}</p>
          </div>
          <div class="favorite-card__variant-other">
            <h5 class="favorite-card-variant">${a.variants[4].color}</h5>
            <p class="favorite-card-price">${a.variants[4].price}</p>
          </div>
        </div>

        <button class="favorite-card__add-tobuy" type="button">
          <img src="${a.btn.svg}" alt="${a.btn.alt}">
        </button>
      </div>
      </article>
        `,i.appendChild(r)})}})});