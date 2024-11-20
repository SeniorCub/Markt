window.onscroll = function() {
     var navbar = document.querySelector(".navbar");
     var links = document.querySelectorAll(".nav-link");
     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
       navbar.style.backgroundColor = "#fefefe";
           links.forEach(element => {
           element.style.color = "#000";
           });
     } else {
       navbar.style.backgroundColor = "transparent";
          links.forEach(element => {
               element.style.color = "#fff";
          });
     }
   };

// let thee = document.querySelector('#theme');
// let secBox = document.querySelector('.section');
// let firstSecHead = document.querySelector('#first-section-heading');
// let dealss = document.querySelector('.dealss');

// let cardd = document.querySelectorAll('.card');

// document.querySelector('.theme').addEventListener('click', change) 
// function change() {
//      if (thee.checked == true) {
//           console.log("clicked");
//           secBox.style.backgroundColor = "#101010";
//           firstSecHead.style.color = "#f1f1f1";
//           dealss.style.backgroundColor = "#101010";
//           cardd.forEach(element => {
//                element.style.backgroundColor = "#101010";
//                element.style.color = "#f1f1f1";
//           });
//      } else {
//           console.log("not clicked");
//           secBox.style.backgroundColor = "#f1f1f1";
//           firstSecHead.style.color = "#000";
//           dealss.style.backgroundColor = "#f1f1f1";
//           cardd.forEach(element => {
//                element.style.backgroundColor = "#f1f1f1";
//                element.style.color = "#000";
//           });
//      }
// }