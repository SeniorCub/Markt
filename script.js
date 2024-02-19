fetch('https://fakestoreapi.com/products?limit=12')
.then (data => data.json())
.then(data2 => data2.forEach(element => {
document.querySelector('.cards').innerHTML += `
     <div class="card" style="width: 20rem; height: 30rem;">
          <div class="bon card-title d-flex">
               <a class="btn btn-pri percent">${element.rating.rate}</a>
               <a class="btn btn-pri love"><i class="fa-regular fa-heart" style="color: #e94c2a;"></i></a>
          </div>

          <img src= ${element.image}>

          <div class="card-title  d-flex">
               <a class="btn btn-sm btn-pri cartgo">${element.category}</a>
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

function toggleTheme() {
     const body = document.body;
     const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
     const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
 
     body.classList.remove(currentTheme);
     body.classList.add(newTheme);
 
     // Save the user's preference to local storage
     localStorage.setItem('theme', newTheme);
   }
 
   // Event listener for the theme toggle checkbox
   const themeToggle = document.getElementById('theme');
   themeToggle.addEventListener('change', toggleTheme);
 
   // Check the user's preference from local storage and apply it
   const savedTheme = localStorage.getItem('theme');
   if (savedTheme) {
     document.body.classList.add(savedTheme);
   }