document.addEventListener('DOMContentLoaded', function () {
     const faqQuestions = document.querySelectorAll('.faq-question');

     faqQuestions.forEach(question => {
         question.addEventListener('click', function () {
             const answer = question.nextElementSibling;
             answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
         });
     });
 });
