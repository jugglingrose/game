/*This is the primary js file.  Also refer to juggle.js and unicorn.js*/
/*Variables*/
var blue_club;
var purple_ball;
var pink_club;
var red_ball;
var fire_torch;
var mainCharacter;
var unicorn;
var rainbow;
var dog;
var points = 0;

var r;
var juggleArray;
var livesArray;
var randomX;
var y;
var objectHeight;
var objectWidth;
var selectedimg;

p5.disableFriendlyErrors = true;

/*preload our images*/
function preload() {
  console.log('preload');
  blue_club = loadImage('/assets/blue_club.png');
  pink_club = loadImage('/assets/pink_juggle_club.png');
  red_ball = loadImage('/assets/red_ball.png');
  purple_ball = loadImage('/assets/purple_ball.png');
  unicorn = loadImage('/assets/unciron_game.png');
  rainbow = loadImage('/assets/rainbow2.svg');
  dog = loadImage('/assets/dino_dog.png');
}

/* set up the canvas */
function setup() {
  /*set up a black canvas to cover the full display height and width*/
  var mainCanvas = createCanvas(windowWidth, windowHeight);
  mainCanvas.background(0);
  mainCanvas.parent('mainSketch');

  /*Set our main character */
  mainCharacter = new Main_Character();

  /*initialize arrays*/
  init();
  /*Every few seconds we want push a new item to our array by calling the addToArray function*/
  var intervalA = setInterval(addToArray, 4000);
  
  //clearInterval(intervalA, 20000);
  //setTimeout(addToArray, 1000);
}

/* initialize the first item of the juggleArray and set three rainbows into our lives array */
function init() {
  juggleArray = [];
  for(var i =0; i < 1; i ++){
    setVariables();
    juggleArray.push(new Juggle(selectedimg, y, randomX,objectHeight, objectWidth))
  }

  livesArray = [];
  for(var i=0; i < 3; i++) {
    livesArray.push(rainbow);
  }

}

/*After we have our initial array.  A setInterval will call this function and we will push
a new juggle item to our juggleArray every few seconds*/
function addToArray() {
  for(var i =0; i < 1; i ++){
    setVariables();
    juggleArray.push(new Juggle(selectedimg, y, randomX,objectHeight, objectWidth))
  }
  console.log('new item array:', juggleArray);
}

function draw() {
  /*clear canvas before each new drawing*/
  clear();
  /* draw each rainbow life */
  var x = windowWidth - 20;
  for(var i = 0; i < livesArray.length; i ++) {
    x = x - 65;
    image(livesArray[i], x, 15, 60, 50);
  }

  /*draw each item of the juggle array*/
  for(var i=0; i < juggleArray.length; i++) {
     /*when the y-axis of an item hits the bottom of the screen, the item 
     is removed from the array*/
     /* this statement isn't being called ? */
     if(juggleArray[i].y === windowHeight){
       console.log("y = displayHeight");
       juggleArray.splice(i, 1);
     }
     juggleArray[i].update(i);
  }
  mainCharacter.update();
}

/* images won't load so I run http-server. */
