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
//var bg;

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
 // bg = loadImage('/assets/bubble_gum_bg.svg');
}

/* set up the canvas */
function setup() {
  console.log('set up called');
  /*set up a black canvas to cover the full display height and width*/
  var mainCanvas = createCanvas(windowWidth, windowHeight);
  mainCanvas.background(0);
  mainCanvas.parent('mainSketch');

  /*Set our main character */
  mainCharacter = new Main_Character();

  /*initialize arrays*/
  init();
  
  /*Every few seconds we want push a new item to our array by calling the addToArray function*/
  intervalA = setInterval(addToArray, 4000);
  /*after 20 seconds we want to speed up the game*/
  setTimeout(() => { clearInterval(intervalA)}, 20000);
  setTimeout(() => { intervalB = setInterval(addToArray, 1000)}, 20000);
  setTimeout(() => { clearInterval(intervalB)}, 30000);
  setTimeout(() => { intervalC = setInterval(addToArray, 500)}, 30000);
  //setTimeout(() => { clearInterval(intervalC)}, 40000);
 
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
  
  /*If no lives remain, end game.  Change the background image to display the game over background.
  display the restart button.  clearInterval. */
  if(livesArray.length === 0){
    console.log("game over");
    var a = select('.bg');
    var restart = select('#restart');
    restart.removeClass('nodisplay');
    restart.addClass('display');
    a.removeClass('bg');
    a.addClass('end');
    clearInterval(intervalA);
    clearInterval(intervalB);
    clearInterval(intervalC);
    noLoop();
    remove();
  }else{
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
