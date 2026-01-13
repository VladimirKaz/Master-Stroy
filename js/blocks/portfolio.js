document.addEventListener("DOMContentLoaded",()=>{(async()=>{try{var r,t=await fetch("./data/products/portfolio.json");if(t.ok)return r=await t.json(),Array.isArray(r)?r:(console.warn("Данные не являются массивом!",r),[]);throw new Error("HTTP error! status: "+t.status)}catch(r){console.error("Ошибка загрузки JSON:",r)}})().then(r=>{{let e=document.querySelector(".portfolio__list");e.innerHTML="",r.forEach(r=>{var t=document.createElement("li");t.classList.add("portfolio__card"),t.innerHTML=`
          <a href="#!">
            <img class="portfolio__card-img" 
            src="${r.image}" 
            srcset="${r.imageSet}"
            alt="${r.alt}">
          </a>
        `,e.appendChild(t)})}})});