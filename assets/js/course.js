const courses = document.querySelectorAll('.list-item');
const moreLists = document.querySelectorAll('.list-item-more');
const arrowBtns = document.querySelectorAll('.list-item-arrow-down');
const listBtns = document.querySelectorAll('.list-item-btn');

// Lắng nghe sự kiện click 

courses.forEach(function(value, index) {
    value.onclick = function() {
        arrowBtns[index].classList.toggle('rotate');
        moreLists[index].classList.toggle('show');
    }
})