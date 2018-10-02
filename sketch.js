
var blue_club;
var purple_ball;
var pink_club;
var red_ball;
var fire_torch;
var unicorn;
var randomX;
var y;

/*preload our images*/
function preload() {
  blue_club = loadImage('/assets/blue_club.png');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  /*Every few seconds we want a new object to appear at the top of the screen*/
  setInterval(objectAppear, 3000);
}

/*generate objects*/
function objectAppear(){
  randomX = random(1, width);
  
  image(blue_club, randomX, 20, 15, 50);
 
  switch( 3 ){
    case 1:
      image(purple_ball, 15, 20, 20, 20);
      break;
    case 2:
      image(blue_club, 10, 20, 15, 50);
      break;
    case 3:
      image(red_ball, 10, 20, 20, 20);
      break;
  }
}

function draw() {
  
}

/* images won't load so I run http-server.  But now images seem to load but nothing will display on the canvas*/
