var loadingPage = new TimelineMax({paused: true});

var menuEnters = new TimelineMax({paused: true});
var menuLeaves = new TimelineMax({paused: true});

var shoeO1BlackEnters = new TimelineMax({paused: true});
var shoeO1WhiteEnters = new TimelineMax({paused: true});
var shoeO1PinkEnters = new TimelineMax({paused: true});
var shoeO1BlackLeaves = new TimelineMax({paused: true});
var shoeO1WhiteLeaves = new TimelineMax({paused: true});
var shoeO1PinkLeaves = new TimelineMax({paused: true});
var shoeO2BlackEnters = new TimelineMax({paused: true});
var shoeO2WhiteEnters = new TimelineMax({paused: true});
var shoeO2YellowEnters = new TimelineMax({paused: true});
var shoeO2BlackLeaves = new TimelineMax({paused: true});
var shoeO2WhiteLeaves = new TimelineMax({paused: true});
var shoeO2YellowLeaves = new TimelineMax({paused: true});
var shoeO3BlackEnters = new TimelineMax({paused: true});
var shoeO3WhiteEnters = new TimelineMax({paused: true});
var shoeO3BlueEnters = new TimelineMax({paused: true});
var shoeO3BlackLeaves = new TimelineMax({paused: true});
var shoeO3WhiteLeaves = new TimelineMax({paused: true});
var shoeO3BlueLeaves = new TimelineMax({paused: true});

loadingPage.to('.loading', 0.5, {scale: 100, autoAlpha: 0});

menuEnters.fromTo('.menu', 1, {scale: 0, autoAlpha: 0}, {display: 'block', autoAlpha: 1, scale: 1, ease: Elastic.easeInOut.config(1, 0.3)});
menuLeaves.to('.menu', 2,  {scale: 10, autoAlpha: 1, transformOrigin: 'center center', ease: Elastic.easeInOut.config(1, 0.3)});

// shoeO1BlackEnters
// .fromTo('.shoe_01_black', 1, {scale: 0, autoAlpha: 0}, {display: 'block', autoAlpha: 1, scale: 1, ease: Elastic.easeInOut.config(1, 0.3)})

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

// Go To Shoe from menu

function goToShoe(idName) {
  document.getElementById(idName).addEventListener('click', function() {
    onShoeClick(shoeO1BlackEnters, `.${idName}`)
  })
}

goToShoe('shoe_01_black');
goToShoe('shoe_02_yellow');
goToShoe('shoe_03_blue');

// Go Back to menu
function goToMenu(className) {
  document.querySelector(`${className} .back`).addEventListener('click', function() {
    onBackClick(shoeO1BlackEnters, `${className}`)
  })
}

goToMenu('.shoe_01_black');
goToMenu('.shoe_02_yellow');
goToMenu('.shoe_03_blue');


function onShoeClick (tl, className) {
  menuLeaves.play();
  //play shoeColorEnter
  animateEnter(tl, className);
}

function onBackClick(tl, className) {
  animateExit(tl, className);
  // menuEnter
}

window.onload = start();