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

menuEnters.fromTo('.menu', 1, {scale: 0, autoAlpha: 0}, {display: 'block', autoAlpha: 1, scale: 1});
menuLeaves.to('.menu', 2,  {scale: 10, autoAlpha: 1, transformOrigin: 'center center'});

shoeO1BlackEnters
.fromTo('.shoe_01_black', 1, {scale: 0, autoAlpha: 0}, {display: 'block', autoAlpha: 1, scale: 1})

function start() {
  loadingPage.play();
  menuEnters.play();
  console.log('runs');
  setTimeout(function() {
    onShoeClick();
  }, 1000)
}

function onShoeClick (className) {
  menuLeaves.play();
  //play shoeColorEnter
  shoeO1BlackEnters.play();
}

window.onload = start();