let prev = document.querySelector('.next');
let next = document.querySelector('.prev');
let slider = document.querySelector('.slider');

prev.addEventListener('click', function(){
   let slides = document.querySelectorAll('.slides');
   slider.appendChild(slides[0]); 
})

next.addEventListener('click', function(){
   let slides = document.querySelectorAll('.slides');
   slider.prepend(slides[slides.length - 1]); 
})