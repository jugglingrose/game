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
var intervalA;
var intervalB;
var intervalC;


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
  console.log('set up called');
  var mainCanvas = createCanvas(windowWidth, windowHeight);
  mainCanvas.background(0);
  mainCanvas.parent('mainSketch');

  /*Set our main character */
  mainCharacter = new Main_Character();

  /*initialize arrays*/
  init();
}

/* initialize the first item of the juggleArray and set three rainbows into our lives array */
function init() {
  console.log('init called');
  juggleArray = [];
  for(var i =0; i < 1; i ++){
    setVariables();
    juggleArray.push(new Juggle(selectedimg, y, randomX,objectHeight, objectWidth))
  }

  livesArray = [];
  for(var i=0; i < 1; i++) {
    livesArray.push(rainbow);
  }
}

/*After we have our initial array.  A setInterval will call this function and we will push
a new juggle item to our juggleArray every 4000 miliseconds, then 1000 miliseconds, then 500 miliseconds*/
function addToArray() {
  console.log("add to array called");
  for(var i =0; i < 1; i ++){
    setVariables();
    juggleArray.push(new Juggle(selectedimg, y, randomX,objectHeight, objectWidth))
  }
  console.log('new item array:', juggleArray);
}

function resetSketch(){
  console.log('reset sketch');
  /*var restart = select('#restart');
  restart.removeClass('display');
  restart.addClass('nodisplay');
  var a = select('.end');
  a.removeClass('end');
  a.addClass('bg');*/
    
  init();
}

var counter = 0;
var speedCounter = 0;

function draw() {

  /*Create intervals to set how frequently an array object should appear on the screen.  Speed up
  as the game progresses */
  counter++;
  speedCounter++;
  if(speedCounter >=1000){
    while(counter===30){
      addToArray();
      counter=0;
    }
  }
  if(speedCounter >= 600){
    while(counter === 60){
      addToArray();
      counter = 0;
    }
  }
  if(speedCounter < 600){
    while(counter === 90){
      addToArray();
      counter = 0;
    }
  }
  
  /*clear canvas before each new drawing*/
  clear();
  
  /*If no lives remain, end game.  Change the background image to display the game over background.
  Display the restart button. */
  if(livesArray.length === 0){
    console.log('game over');
    var restart = select('#restart');
    restart.removeClass('nodisplay');
    restart.addClass('display');
    var a = select('.bg');
    a.removeClass('bg');
    a.addClass('end');
    var button = select('#restartButton');
    button.mousePressed(resetSketch);
  }

  /* If lives is not equal to zero, activate our livesArray and juggle Array.  */
  else{
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
      if(juggleArray[i].y > height){
        juggleArray.splice(i, 1);
      }else{
        juggleArray[i].update(i);
      }
    }
    /* Update the main Character */
    mainCharacter.update();
  }
}

/* images won't load so I run http-server. */
