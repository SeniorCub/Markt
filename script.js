// const imag = document.querySelector('.card-img-top')
// const descrip = document.querySelector('.card-text')
// const cartgo = document.querySelector('.cartgo')
// const original = document.querySelector('.original')

// fetch('https://fakestoreapi.com/products?limit=5')
// .then(res=>res.json())
// .then(data2 => data2.forEach(element => {
//      imag.src = element.image
//      descrip.innerText = element.title
//      cartgo.innerText = element.category
//      original.innerText = element.price
// }))


fetch('https://fakestoreapi.com/products?limit=12')
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
fetch('https://fakestoreapi.com/products?limit=20')
.then (data => data.json())
.then(data2 => data2.forEach(element => {
document.querySelector('.product-display-cont').innerHTML += `
     <div class="disp-cont-for-two">
          <div class="product-cont">
               <img src= ${element.image}>
               <div class="hover-content">
                    <p>${element.title}</p>
               </div>
          </div>
          <div class="product-cont">
               <img src= ${element.image}>
               <div class="hover-content">
                    <p>${element.title}</p>
               </div>
          </div>
     </div>
`
}));