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
               <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
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
let cards = document.querySelectorAll('.card');

document.querySelector('.theme').addEventListener('click', () => {
     if (thee.checked == true) {
          console.log("clicked");
          hero.style.backgroundColor = "#101010";
          heroP.style.color = "#f1f1f1";
          secBox.style.backgroundColor = "#101010";
          firstSecHead.style.color = "#f1f1f1";
          dealss.style.backgroundColor = "#101010";
          cards.forEach(card => {
               card.style.backgroundColor = "#101010";
               card.style.color = "#f1f1f1";
          });
     } else {
          console.log("not clicked");
          hero.style.backgroundColor = "#f1f1f1";
          heroP.style.color = "#000";
          secBox.style.backgroundColor = "#f1f1f1";
          firstSecHead.style.color = "#000";
          dealss.style.backgroundColor = "#f1f1f1";
          cards.forEach(card => {
               card.style.backgroundColor = "#f1f1f1";
               card.style.color = "#000";
          });
     }
})