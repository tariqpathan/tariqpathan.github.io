document.addEventListener('DOMContentLoaded', function () {
    listAnimationOnScroll();
    var slider = new BeerSlider(document.getElementById('image-slider-container'));
});

function listAnimationOnScroll () {
    const observerOptions = {
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px',
        threshold: 0.9 //fraction of target that is visible
    }
    
    let listAnimationObserver = new IntersectionObserver(listAnimation, observerOptions);
    let animationObserverTarget = document.querySelector('ul.animate');
    listAnimationObserver.observe(animationObserverTarget);
}

function listAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("intersecting")
            entry.target.classList.add('start');
            observer.disconnect();
        }
    });
}