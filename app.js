//DYNAMIC COPYRIGHT YEAR
document.getElementById("year").innerText = new Date().getFullYear();
$(document).ready(function () {
    // $(".owl-carousel").owlCarousel();
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        singleItem: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });
});

// const slideDivs = document.querySelectorAll('.slide');

// slideDivs.forEach((slideDiv) => {
//     slideDiv.addEventListener('mouseenter', () => {
//         // Show the corresponding "title" div when hovering over the slide div
//         const titleDiv = slideDiv.nextElementSibling;
//         titleDiv.style.display = 'flex';
//     });

//     slideDiv.addEventListener('mouseleave', () => {
//         // Hide the "title" div when the mouse leaves the slide div
//         const titleDiv = slideDiv.nextElementSibling;
//         titleDiv.style.display = 'none';
//     });
// });

const slideDivs = document.querySelectorAll('.slide');
const captionSpans = document.querySelectorAll('.capption');
const titleContainer = document.querySelector('.title');
const carouselContainer = document.querySelector('#carousel');

// Add 'show' class to the first caption span initially
captionSpans[0].classList.add('show');

// Event listener for the container to show the first caption when not hovering over slide divs
titleContainer.addEventListener('mouseenter', () => {
    captionSpans[0].classList.add('show');
});

// Event listener for the container to hide all captions when not hovering over slide divs
carouselContainer.addEventListener('mouseleave', () => {
    // Show only the first caption span
    captionSpans.forEach((captionSpan, index) => {
        captionSpan.classList.toggle('show', index === 0);
    });
});

// Event listeners for slide divs to show their corresponding caption spans
slideDivs.forEach((slideDiv, index) => {
    slideDiv.addEventListener('mouseenter', () => {
        captionSpans.forEach((captionSpan) => {
            captionSpan.classList.remove('show');
        });
        captionSpans[index].classList.add('show');
    });
});





