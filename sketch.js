
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
var itemArray;
var x;

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
  //setInterval(init, 3000);
}

/* Item Class */
function Item(img, y, x, objectHeight, objectWidth) {
  this.img = img;
  //this.randomX = randomX;
  this.x = x;
  this.y = y;
  this.objectHeight = objectHeight;
  this.objectWidth = objectWidth;
  /*select random number along x-axis */
  //this.randomX = random(1, width-20);

  this.draw = function(){
    console.log("this is the img:", this.img);   
    //image(this.img, this.x, this.y, this.objectWidth, this.objectHeight);//
  }
  this.update = function(){
    this.y = this.y + 5;
    this.draw();
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
      console.log("img select:", img);
      return img;
    case 1:
      console.log('blue');
      img = "blue_club";
      console.log("img select:", img);
      return img;
    case 2:
      console.log('red');
      img = "red_ball";
      console.log("img select:", img);
      return img;
    case 3:
      img = "pink_club";
      console.log("img select:", img);
      return img;
  }
}

/*initialize objects*/
function init() {
  /*initialize variables*/
  itemArray = [];
  /* y-axis */
  y = 15;
  x = 30;

  if(img === "red_ball" || img === "purple_ball"){
    objectHeight = 25;
    objectWidth = 25;
  }else{
    objectHeight = 50;
    objectWidth = 15;
  }

  /*produce an array of Items*/
  for(var i = 0; i < 10; i++){
    img = imgSelect();
    itemArray.push(new Item(img, y, x,objectHeight, objectWidth) );
  }
  console.log(itemArray);
}

function draw() {
  for(var i=0; i < itemArray.length; i++) {
     console.log(itemArray[i]);
     itemArray[i].update(i);
  }
}

init();
/* images won't load so I run http-server.  But now images seem to load but nothing will display on the canvas*/
