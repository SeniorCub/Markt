fetch('https://fakestoreapi.com/products')
.then (data => data.json())
.then(data2 => data2.forEach(element => {
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

function fetc() {
     fetch('https://fakestoreapi.com/products')
     .then (data => data.json())
     .then(data2 => data2.forEach(element => {
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
     `
     
     })).catch((err) => {
          errree()
          console.log(err);
     });
}

document.querySelectorAll(".loadmore").forEach(element => {
     element.addEventListener("click", loadmor);
} );
let aside = document.querySelector("aside");
let load = document.querySelector(".load");
let errre = document.querySelector(".errmsg");
let vv = document.querySelector(".vv");

function loadmore() {
     console.log("clicked");
     aside.style.display = "block";
     fetc();
     document.querySelector(".loadmore").style.display = "none";
     load.style.display = "none";
}
 function loadmor() {
     if (load.style.display === "none") {
          load.style.display = "block";
     } else {
          load.style.display = "none";
     }
     setTimeout(loadmore, 2000);
 }

 function errree() {
     errre.style.display = "block";
     // vv.style.display = "none";
 }