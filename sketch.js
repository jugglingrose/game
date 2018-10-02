
/*Images*/
var blue_club;
var purple_ball;
var pink_club;
var red_ball;
var fire_torch;
var unicorn;

var randomX;
var y;
var r;
var ball;
var img;
var objectHeight;
var objectWidth;

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
  setInterval(init, 3000);
}

/* Item Class */
function Item(img) {
  this.img = img;
  randomX = random(1, width-20);
  y = 15;

  this.update = function(){
  }

  this.show = function(){
  }

}

/*generate random img*/
function imgSelect(){
  console.log('img select called');
  /*select a random number from 0 to 4*/
  r = Math.floor(Math.random() * 4);

   switch( r ){
    case 0:
      img = "purple_ball";
      //objectHeight = 25;
      //objectWidth = 25;
      return img;
    case 1:
      console.log('blue');
      img = "blue_club";
      return img;
    case 2:
      console.log('red');
      img = "red_ball";
      return img;
    case 3:
      img = "pink_club";
      return img;
  }
}

function init() {
  img = imgSelect();
  Item(img);
}

function draw() {
  this.show();
  
}

/* images won't load so I run http-server.  But now images seem to load but nothing will display on the canvas*/
