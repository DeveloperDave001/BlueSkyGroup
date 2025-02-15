// Autotyped Text Effect

var typed = new Typed('#units', {
    strings: ['', 'Models & Ushers', 'Print House', 
        'Media Promotions', 
        'TV', '360 Degree Ads', 'Outdoor Ads', 'Indoor Ads', 'Posters', 'Banners', 'Our Of Homes', 'Brand Activation', 'Brand Design', 'Promo Items', 'Event Planning'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
 

/* Slider */
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none'; // Show current slide
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Change slide every 3 seconds
setInterval(nextSlide, 1000);