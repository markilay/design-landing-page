const section = document.querySelectorAll(".slide");
const arrow = document.querySelectorAll(".arrow-nav");
const burger = document.querySelector(".burger");

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function nextSlide() {
  section.forEach((sliderImage) => {
    const slide = sliderImage.getBoundingClientRect();
    console.log(slide.top);
    console.log(slide.bottom);
    console.log(slide.height);
    if (slide.bottom / 2 === slide.height) {
      sliderImage.firstElementChild.classList.add("active");
    }
  });
}

function scrollSlide(e) {
  section.forEach((sliderImage) => {
    const slide = sliderImage.getBoundingClientRect();
    const height = window.innerHeight + window.pageYOffset + slide.height / 2;
    const top = window.innerHeight + window.pageYOffset + slide.top;
    if (height > top) {
      sliderImage.firstElementChild.classList.add("active");
    }
  });
}

function openMenu() {
  document.querySelector("header").classList.toggle("trasformed");
  document.querySelector(".menu-bar").classList.toggle("trasformed");
}

window.addEventListener("scroll", debounce(scrollSlide));
arrow.forEach((arrow) => {
  arrow.addEventListener("click", nextSlide);
});
burger.addEventListener("click", openMenu);
