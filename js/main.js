var loadingPage = new TimelineMax({paused: true});

var menuEnters = new TimelineMax({paused: true});
var menuLeaves = new TimelineMax({paused: true});

var shoeEnters = new TimelineMax({paused: true});
var shoeLeaves = new TimelineMax({paused: true});

loadingPage.to('.loading', 0.5, {scale: 100, autoAlpha: 0});

menuEnters.fromTo('.menu', 1, {scale: 0, autoAlpha: 0}, {display: 'block', autoAlpha: 1, scale: 1, ease: Elastic.easeInOut.config(1, 0.3)});
menuLeaves.fromTo('.menu', 2, {scale: 1}, {scale: 10, autoAlpha: 1, transformOrigin: 'center center', ease: Elastic.easeInOut.config(1, 0.3)});

function start() {
  loadingPage.play();
  menuEnters.play();
  console.log('runs');
  // setTimeout(function() {
  //   onShoeClick();
  // }, 1000)
}

function animateEnter(tl, className) {
  tl.fromTo(className, 1, {scale: 0, autoAlpha: 0}, {display: 'block', autoAlpha: 1, scale: 1, ease: Elastic.easeInOut.config(1, 0.3)})
  tl.play();
}

function animateExit(tl, className) {
  tl.fromTo(className, 1, {scale: 1, autoAlpha: 1}, {display: 'none', autoAlpha: 0, scale: 10, ease: Elastic.easeInOut.config(1, 0.3)});
  tl.play();
}

//Change Color
function goToShoeColor(idName, color) {
  document.getElementById(`${idName} ${color}`).addEventListener('click', function() {
    onColorClick(shoeEnters, `.${idName}`)
  })
}

// Go To Shoe from menu
function goToShoe(idName) {
  document.getElementById(idName).addEventListener('click', function() {
    onShoeClick(shoeEnters, `.${idName}`)
  })
}

goToShoe('shoe_01_black');
goToShoe('shoe_02_yellow');
goToShoe('shoe_03_blue');

// Go Back to menu
function goToMenu(className) {
  document.querySelector(`${className} .back`).addEventListener('click', function() {
    onBackClick(shoeEnters, `${className}`)
  })
}

goToMenu('.shoe_01_black');
goToMenu('.shoe_02_yellow');
goToMenu('.shoe_03_blue');


function onShoeClick (tl, className) {
  menuLeaves.play();
  animateEnter(tl, className);
}

function onColorClick(tl, className, tl2, className2) {
  animateExit(tl2, className2);
  animateEnter(tl, className);
}

function onBackClick(tl, className) {
  animateExit(tl, className);
  menuEnters.restart();
}

window.onload = start();