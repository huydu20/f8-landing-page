const show = document.querySelector('.mySlide');
const slides = document.querySelectorAll('.mySlide img');

const next = document.querySelector('.rate__body-section-btn-right');
const prev = document.querySelector('.rate__body-section-btn-left');

let counter = 1;
const sizeSlide = slides[counter].offsetWidth;

show.style.transform = 'translateX(' + (-sizeSlide * counter) + 'px)';

// Event on next button

next.addEventListener('click', function () {
    if (counter >= slides.length - 1) return;
    show.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    show.style.transform = 'translateX(' + (-sizeSlide * counter) + 'px)';
});

// Event on prev button

prev.addEventListener('click', function () {
    if (counter <= 0) return;
    show.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    show.style.transform = 'translateX(' + (-sizeSlide * counter) + 'px)';
});

// Animation slides

show.addEventListener('transitionend', function () {
    if (counter === slides.length - 1) {
        show.style.transition = 'none';
        counter = slides.length - 2;
        show.style.transform = 'translateX(' + (-sizeSlide * counter) + 'px)';
    }
    if (counter === 0) {
        show.style.transition = 'none';
        counter = slides.length - 2;
        show.style.transform = 'translateX(' + (-sizeSlide * counter) + 'px)';
    }
});



// Preview
const view = document.querySelector('.preview__body-section-view');
const myList = document.querySelector('.myList');
const items = document.querySelectorAll('.myList-item');
const nextList = document.querySelector('.preview__body-section-btn-right');
const prevList = document.querySelector('.preview__body-section-btn-left');

let index = 0;
const translateSize = items[0].offsetWidth + 20;
const listWidth = items[index].offsetWidth * items.length + items.length * 30;

myList.style.width = listWidth + 'px';

// Event on next button

nextList.addEventListener( 'click', function () {
    if (index >= items.length - 3) return;
    myList.style.transition = 'transform 0.5s ease-in-out';
    index++;
    myList.style.transform = 'translateX(' + ( - translateSize * index) + 'px)';
});

// Event on prev button

prevList.addEventListener( 'click', function () {
    if (index <= 0) return;
    myList.style.transition = 'transform 0.5s ease-in-out';
    index--;
    myList.style.transform = 'translateX(' + ( - translateSize * index) + 'px)';
});

myList.addEventListener('transitionend', function () {
    if (index === items.length - 3) {
        nextList.style.display = 'none';
    } else {
        nextList.style.display = 'inline-block';
    }
    if (index === 0) {
        prevList.style.display = 'none';
    } else {
        prevList.style.display = 'inline-block';
    }
});



