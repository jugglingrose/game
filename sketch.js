
var blue_club;
var purple_ball;
var pink_club;
var red_ball;
var fire_torch;
var unicorn;
var randomX;
var y;
var r;

/*preload our images*/
function preload() {
  blue_club = loadImage('/assets/blue_club.png');
  pink_club = loadImage('/assets/pink_juggle_club.png');
  red_ball = loadImage('/assets/red_ball.png');
  purple_ball = loadImage('/assets/purple_ball.png');

}

function setup() {
  /*set up a black canvas to cover the full display height and width*/
  createCanvas(displayWidth, displayHeight);
  background(0);
  /*Every few seconds we want a new object to appear at the top of the screen*/
  setInterval(objectAppear, 3000);
}

/*generate random objects*/
function objectAppear(){
  randomX = random(1, width-20);
  /*select a random number from 0 to 4*/
  r = Math.floor(Math.random() * 4);
  /* set y-axis */
  y = 15;

   switch( r ){
    case 0:
      console.log('purple');
      image(purple_ball, randomX, y, 25, 25);
      break;
    case 1:
      console.log('blue');
      image(blue_club, randomX, y, 15, 50);
      break;
    case 2:
      console.log('red');
      image(red_ball, randomX, y, 25, 25);
      break;
    case 3:
      image(pink_club, randomX, y, 15, 50);
  }
}

function draw() {
    y = y + 5;
  
}

/* images won't load so I run http-server.  But now images seem to load but nothing will display on the canvas*/
