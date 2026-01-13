document.addEventListener("DOMContentLoaded",()=>{(async()=>{try{var a,r=await fetch("/data/products/catalog-main.json");if(r.ok)return a=await r.json(),Array.isArray(a)?a:(console.warn("Данные не являются массивом!",a),[]);throw new Error("HTTP error! status: "+r.status)}catch(a){return console.error("Ошибка загрузки JSON:",a),[]}})().then(a=>{if(Array.isArray(a)){let t=document.querySelector("#catalog-main");t?(t.innerHTML="",a.forEach(a=>{var r=document.createElement("li");r.classList.add("catalog-main__card"),r.innerHTML=`
        <div class="catalog-main__img-box">
          <img class="catalog-main__img" 
          src="${a.image}" 
          alt="${a.alt}">
        </div>

        <h4 class="catalog-section-title">${a.title}</h4>
      `,t.appendChild(r)})):console.error("Контейнер #catalog-main не найден")}else console.error("catalog должен быть массивом:",a)})});