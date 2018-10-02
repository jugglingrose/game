var blue_club;
var purple_ball;
var pink_club;
var red_ball;
var fire_torch;
var unicorn;

function preload() {
  blue_club = loadImage('/assets/blue_club.png');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
}

function draw() {
  image(blue_club, 20, 20, 150, 150);
  fill(255);
  ellipse(100, 100, 50, 50);

}


/* images won't load so I run http-server.  But now images seem to load but nothing will display on the canvas*/
