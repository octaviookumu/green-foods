//Select element function
const selectElement = (element) => document.querySelector(element);

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', () => {
	body.classList.toggle('open');
});

// Slider

let slideshow = document.getElementById('slideshow');
let slides = slideshow.getElementsByTagName('img');
let leftBtn = document.querySelector('.left');
let rightBtn = document.querySelector('.right');
let index = 0;

let prevSlide = () => {
	slides[index].classList.remove('active');
	index = (index + 1) % slides.length;
	slides[index].classList.add('active');
};

let nextSlide = () => {
	slides[index].classList.remove('active');
	index = (index - 1 + slides.length) % slides.length;
	slides[index].classList.add('active');
};

leftBtn.addEventListener('click', prevSlide);
rightBtn.addEventListener('click', nextSlide);

let slideshowText = document.getElementById('slideshowText');
let slidesText = slideshowText.getElementsByTagName('div');
let leftBtnText = document.querySelector('.left');
let rightBtnText = document.querySelector('.right');
let i = 0;

let prevSlideText = () => {
	slidesText[i].classList.remove('active');
	i = (i + 1) % slidesText.length;
	slidesText[i].classList.add('active');
};

let nextSlideText = () => {
	slidesText[i].classList.remove('active');
	i = (i - 1 + slidesText.length) % slidesText.length;
	slidesText[i].classList.add('active');
};

leftBtnText.addEventListener('click', prevSlideText);
rightBtnText.addEventListener('click', nextSlideText);
