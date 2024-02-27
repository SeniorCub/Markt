fetch('https://fakestoreapi.com/products?limit=12')
.then (data => data.json())
.then(data2 => data2.forEach(element => {
document.querySelector('.cards').innerHTML += `
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
`
}));
fetch('https://fakestoreapi.com/products?limit=20')
.then (data => data.json())
.then(data2 => data2.forEach(element => {
document.querySelector('.product-display-cont').innerHTML += `
     <div class="disp-cont-for-two">
          <div class="product-cont">
               <img src= ${element.image}>
               <div class="hover-content">
                    <span>${element.title}</span>
               </div>
          </div>
     </div>
`
}));

let thee = document.querySelector('#theme');
let hero = document.querySelector('#hero');
let heroP = document.querySelector('#hero .p');
let secBox = document.querySelector('.section');
let firstSecHead = document.querySelector('#first-section-heading');
let dealss = document.querySelector('.dealss');

let cardd = document.querySelectorAll('.card');

document.querySelector('.theme').addEventListener('click', change) 
function change() {
     if (thee.checked == true) {
          console.log("clicked");
          hero.style.backgroundColor = "#101010";
          heroP.style.color = "#f1f1f1";
          secBox.style.backgroundColor = "#101010";
          firstSecHead.style.color = "#f1f1f1";
          dealss.style.backgroundColor = "#101010";
          cardd.forEach(element => {
               element.style.backgroundColor = "#101010";
               element.style.color = "#f1f1f1";
          });
     } else {
          console.log("not clicked");
          hero.style.backgroundColor = "#f1f1f1";
          heroP.style.color = "#000";
          secBox.style.backgroundColor = "#f1f1f1";
          firstSecHead.style.color = "#000";
          dealss.style.backgroundColor = "#f1f1f1";
          cardd.forEach(element => {
               element.style.backgroundColor = "#f1f1f1";
               element.style.color = "#000";
          });
     }
}