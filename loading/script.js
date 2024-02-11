fetch('https://fakestoreapi.com/products')
.then (data => data.json())
.then(data2 => data2.forEach(element => {
console.log(data2);
document.querySelector('.cards').innerHTML += `
     <div class="card" style="width: 20rem; height: 30rem;">
          <div class="bon card-title d-flex">
               <a href="#" class="btn btn-pri percent">${element.rating.rate}</a>
               <a href="#" class="btn btn-pri love"><i class="fa-regular fa-heart" style="color: #e94c2a;"></i></a>
          </div>

          <img src= ${element.image}>

          <div class="card-title  d-flex">
               <a href="#" class="btn btn-sm btn-pri cartgo">${element.category}</a>
               <h5 class="original">$${element.price}</h5>
          </div>
          
          <p class="card-text">${element.title}</p>

          <div class="bon card-title d-flex">
               <a href="#" class="btn btn-pri">Add to Cart</a>
               <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
     </div>
`
}));

// Function to fetch and render products
function fetchAndRenderProducts() {
     fetch('https://fakestoreapi.com/products')
     .then(data => data.json())
     .then(data2 => { data2.forEach(element => {
          document.querySelector('#cards').innerHTML += `
          
          <div class="card" style="width: 20rem; height: 30rem;">
          <div class="bon card-title d-flex">
               <a href="#" class="btn btn-pri percent">${element.rating.rate}</a>
               <a href="#" class="btn btn-pri love"><i class="fa-regular fa-heart" style="color: #e94c2a;"></i></a>
          </div>

          <img src= ${element.image}>

          <div class="card-title  d-flex">
               <a href="#" class="btn btn-sm btn-pri cartgo">${element.category}</a>
               <h5 class="original">$${element.price}</h5>
          </div>
          
          <p class="card-text">${element.title}</p>

          <div class="bon card-title d-flex">
               <a href="#" class="btn btn-pri">Add to Cart</a>
               <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
     </div>
          `;
     });
     });
}

// Function to display a loading message or spinner
function showLoading() {
     document.querySelector('.load').style.display = 'block';
}

// Function to hide the loading message or spinner
function hideLoading() {
     document.querySelector('.load').style.display = 'none';
}
  
document.querySelector(".loadmore").addEventListener("click", loadmore())

function loadmore() {
     document.querySelector("aside").style.display="block"
          // Show loading message or spinner
          // showLoading();
    
          // Fetch and render more products
          fetchAndRenderProducts()
          //   .then(() => {
          //     // Hide loading message or spinner after products are loaded
          //     hideLoading();
          //   })
          //   .catch(error => {
          //     console.error('Error fetching products:', error);
          //     // Handle error and hide loading message or spinner
          //     hideLoading();
          //   });
}