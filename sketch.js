/*Images*/
var blue_club;
var purple_ball;
var pink_club;
var red_ball;
var fire_torch;
var unicorn;

var r;
var itemArray;

/*preload our images*/
function preload() {
  console.log('preload');
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
  init();
}

/* Item Class */
function Item(img, y, randomX, objectHeight, objectWidth) {
  this.img = img;
  this.randomX = randomX;
  this.y = y;
  this.objectHeight = objectHeight;
  this.objectWidth = objectWidth;

  this.draw = function(){
    image(this.img, this.randomX, this.y, this.objectWidth, this.objectHeight);//
  }
  this.update = function(){
    this.y = this.y + 1;
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
      console.log('purple');
      return purple_ball;
    case 1:
      console.log('blue');
      return blue_club;
    case 2:
      console.log('red');
      return red_ball;
    case 3:
      console.log('pink');
      return pink_club;
  }
}

/*initialize objects*/
function init() {
  /*initialize variables*/
  itemArray = [];
  /* y-axis */
  var y = 15;
  //var x = 30;

  /*produce an array of Items*/
  for(var i = 0; i < 10; i++){

    /*select random number along x-axis */
    var randomX = random(1, width-20);

    /*call imgSelect() to select a random image*/
    var selectedimg = imgSelect();

    /*set height and width of objects depending on the type of object selected*/
    if(selectedimg === red_ball || selectedimg === purple_ball){
      var objectHeight = 25;
      var objectWidth = 25;
    }else{
      var objectHeight = 50;
      var objectWidth = 15;
    }

    /*Push items into array */
    itemArray.push(new Item(selectedimg, y, randomX,objectHeight, objectWidth) );
  }
  console.log(itemArray);
}


function draw() {
  /*clear canvas before each new drawing*/
  clear();
  /*draw each item of the array*/
  for(var i=0; i < itemArray.length; i++) {
     //console.log(itemArray[i]);
     itemArray[i].update(i);
  }
}

/* images won't load so I run http-server.  But now images seem to load but nothing will display on the canvas*/
