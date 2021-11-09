var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;}







// navigation bar 
const navShowBtn = document.querySelector('.nav-show-btn');
const navHideBtn = document.querySelector('.nav-hide-btn');
const navMenu = document.querySelector('.navbar-collapse');

navShowBtn.addEventListener('click', () => {
    navMenu.classList.add('showNav');
});

navHideBtn.addEventListener('click', () => {
    navMenu.classList.remove('showNav');
});

// showcase bg slider 
const dottedBtns = document.querySelectorAll('.dotted-btns span');
let slideCount = 0;

dottedBtns.forEach((item) => {
    item.addEventListener('click', () => {
        slideCount = item.dataset.id;
        slideShowcase();
    });
});

function slideShowcase(){
    const displayWidth = document.querySelector('.showcase').clientWidth;
    document.querySelector('.showcase-content').style.transform = `translateX(${-slideCount * displayWidth}px)`;
}

window.addEventListener('resize', slideShowcase);