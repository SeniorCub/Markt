document.addEventListener('DOMContentLoaded', function () {
     const faqQuestions = document.querySelectorAll('.faq-question');

     faqQuestions.forEach(question => {
         question.addEventListener('click', function () {
             const answer = question.nextElementSibling;
             answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
         });
     });
 });

let collaps = document.querySelectorAll('.collaps')
let collaps1 = document.querySelectorAll('.collaps1')

collaps.addEventListener('click',function () {
     let collapseExample = document.querySelector('#collapseExample');
     let collapseExample1 = document.querySelector('#collapseExample1');
     
     if (collapseExample1.style.display === 'block'){
          collapseExample.style.display = 'block';
          collapseExample1.style.display = 'none';
     } else {
          collapseExample.style.display = 'block';
     }
})
collaps1.addEventListener('click',function () {
     let collapseExample = document.querySelector('#collapseExample');
     let collapseExample1 = document.querySelector('#collapseExample1');
     
     if (collapseExample.style.display === 'block'){
          collapseExample1.style.display = 'block';
          collapseExample.style.display = 'none';
     } else {
          collapseExample1.style.display = 'block';
     }
})