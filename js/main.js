var loadingPage = new TimelineMax();
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


function start() {
  loadingPage.pause();
  console.log('runs');
}

window.onload = start();