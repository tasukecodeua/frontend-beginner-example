let slideToShow = 0;

const modalBtns = document.querySelectorAll('.gallery-modal-btn')

modalBtns.forEach(function (button) {

    button.addEventListener('click', function () {
        const slideNumnberToShow = button.getAttribute('data-index');
        slideToShow = Number(slideNumnberToShow);
        console.log(slideToShow);
    });
});

// start lib modal window
MicroModal.init({
    onShow: function () {
        slider.go(slideToShow);
    }
});

// start lib slider
const sliderContainer = document.querySelector('.splide');

const slider = new Splide(sliderContainer).mount();

