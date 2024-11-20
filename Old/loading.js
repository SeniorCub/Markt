// Add a delay function
function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://fakestoreapi.com/products?limit=20")
    .then((data) => data.json())
    .then((data2) =>
      data2.forEach((element) => {
        document.querySelector(".cards").innerHTML += `
          <div class="card" style="width: 20rem; height: 30rem;">
               <div class="bon card-title d-flex">
                    <div class="btn btn-pri percent">${element.rating.rate}</div>
                    <div class="btn btn-pri love"><i class="fa-regular fa-heart" style="color: #e94c2a;"></i></div>
               </div>

               <img src= ${element.image}>

               <div class="card-title  d-flex">
                    <div class="btn btn-sm btn-pri cartgo">${element.category}</div>
                    <h5 class="original">$${element.price}</h5>
               </div>
               
               <p class="card-text">${element.title}</p>

               <button class="CartBtn">
                    <span class="IconContainer"> 
                    <i  class="fa-solid fa-cart-shopping" class="cart" style="color: #ffffff;"></i>
                    </span>
                    <span class="text">Add to Cart</span>
               </button>
          </div>
     `;
      })
    );
  fetch("https://fakestoreapi.com/products?limit=20")
    .then((data) => data.json())
    .then((data2) =>
      data2.forEach((element) => {
        document.querySelector(".product-display-cont").innerHTML += `
          <div class="disp-cont-for-two">
               <div class="product-cont">
                    <img src= ${element.image}>
                    <div class="hover-content">
                         <span>${element.title}</span>
                    </div>
               </div>
          </div>
     `;
      })
    );

  const images = document.querySelectorAll("img[data-src]");
  const content = document.getElementById("content");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute("data-src");

          img.setAttribute("src", src);
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    },
    { threshold: 0.5 }
  );

  images.forEach((img) => {
    observer.observe(img);
  });

  async function showContent() {
    content.classList.remove("hidden");
    await delay(500);
  }

  async function initializeWebsite() {
    document.getElementById("loading").style.display = "flex";
    await delay(2000);
    document.getElementById("loading").style.display = "none";
    await showContent();
  }

  window.addEventListener("load", initializeWebsite);
});
