// Autotyped Text Effect

var typed = new Typed('#units', {
    strings: ['', 'Optimize Your Brand Visibility', 'Your Sky is Limitless...', 'We Bridge the Gap'],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true
});
 
// Autotyped Text Effect2

var typed = new Typed('#units2', {
    strings: ['', 'Models & Ushers', 'Print House', 
        'Media Promotions', 
        'TV', '360 Degree Ads', 'Outdoor Ads', 'Indoor Ads', 'Posters', 'Banners', 'Our Of Homes', 'Brand Activation', 'Brand Design', 'Promo Items', 'Event Planning'],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true
});
 
 

/* Slider-Show 1s Interval */
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



// Function to animate the counter
function animateCounter() {
    const counterElement = document.getElementById('counter');
    let count = 0;

    // GSAP animation
    const tl = gsap.timeline({
        onUpdate: function() {
            counterElement.innerText = Math.floor(count);
        },
        onComplete: function() {
            // Fade out the preloader
            gsap.to('.preLoader', {
                duration: 1,
                opacity: 0,
                onComplete: function() {
                    // Hide preloader and show content
                    document.getElementById('preloader').style.display = 'none';
                    document.getElementById('content').style.display = 'block';
                }
            });
        }
    });

    // Animate from 0 to 100 over 2 seconds
    tl.to({}, {
        duration: 2,
        onUpdate: function() {
            count += 50; // Increment by 50 for smoother animation
            if (count > 100) count = 100; // Cap at 100
        },
        onComplete: function() {
            count = 100; // Ensure it ends at 100
        }
    });
}

// Start the animation when the window loads
window.onload = function() {
    animateCounter();
}; 


/* Dark Mode ? Light Mode */
const toggleButton = document.querySelector("[data-theme-toggle]");

function switchTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    toggleButton.innerText = newTheme === "dark" ? "Light Mode" : "Dark Mode";
    toggleButton.setAttribute("aria-label", newTheme === "dark" ? "Change to light theme" : "Change to dark theme");
}

toggleButton.addEventListener("click", switchTheme);

// Check for saved user preference on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    toggleButton.innerText = savedTheme === "dark" ? "Light Mode" : "Dark Mode";
}








