/*This is the primary js file.  Also refer to juggle.js and unicorn.js*/
/*Images*/
var blue_club;
var purple_ball;
var pink_club;
var red_ball;
var fire_torch;
var mainCharacter;
var unicorn;

var r;
var itemArray;
var randomX;
var y;
var objectHeight;
var objectWidth;
var selectedimg;

/*preload our images*/
function preload() {
  console.log('preload');
  blue_club = loadImage('/assets/blue_club.png');
  pink_club = loadImage('/assets/pink_juggle_club.png');
  red_ball = loadImage('/assets/red_ball.png');
  purple_ball = loadImage('/assets/purple_ball.png');
  unicorn = loadImage('/assets/unciron_game.png');
}

/* set up the canvas */
function setup() {
  /*set up a black canvas to cover the full display height and width*/
  createCanvas(windowWidth, windowHeight);
  background(0);
  /*Set our main character */
  mainCharacter = new Main_Character();

  /*Set up our juggle array*/
  init();
  /*Every few seconds we want push a new item to our array by calling the addToArray function*/
  setInterval(addToArray, 3000);
}

/* initialize the first item of the itemArray */
function init() {
  itemArray = [];
  for(var i =0; i < 1; i ++){
    setVariables();
    itemArray.push(new Juggle(selectedimg, y, randomX,objectHeight, objectWidth))
  }
  console.log(itemArray);
}

/*After we have our initial array.  A setInterval will call this function and we will push
a new item to our itemArray every few seconds*/
function addToArray() {
  for(var i =0; i < 1; i ++){
    setVariables();
    itemArray.push(new Juggle(selectedimg, y, randomX,objectHeight, objectWidth))
  }
  console.log('new item array:', itemArray);
}

function draw() {
  /*clear canvas before each new drawing*/
  clear();
  /*draw each item of the array*/
  for(var i=0; i < itemArray.length; i++) {
     /*when the y-axis of an item hits the bottom of the screen, the item 
     is removed from the array*/
     if(itemArray[i].y === displayHeight){
       console.log("y = displayHeight");
       itemArray.splice(i, 1);
     }
     itemArray[i].update(i);
  }
  mainCharacter.update();
}

/* images won't load so I run http-server.  But now images seem to load but nothing will display on the canvas*/
