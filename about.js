

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('myVideo');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Play the video when it comes into view
                video.play();
            } else {
                // Pause the video when it goes out of view
                video.pause();
            }
        });
    });

    // Observe the video container
    const videoContainer = document.querySelector('.blueSky-Units');
    observer.observe(videoContainer);
});


// Autotyped Text Effect

var typed = new Typed('#units', {
    strings: ['', 'Models & Ushers', 'Print House', 
        'Media Promotions', 
        'TV', '360 Degree Ads', 'Outdoor Ads', 'Indoor Ads', 'Posters', 'Banners', 'Our Of Homes', 'Brand Activation', 'Brand Design', 'Promo Items', 'Event Planning'],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true
});