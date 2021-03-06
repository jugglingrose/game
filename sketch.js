/*This is the primary js file.  Also refer to juggle.js and unicorn.js*/
/*Variables*/
var blue_club;
var purple_ball;
var pink_club;
var red_ball;
var fire;
var mainCharacter;
var unicorn;
var rainbow;
var dog;
var level;
var pink_glitter;
var star;
var orange_feather;


var points = 0;
var juggleArray;
var livesArray;
var glitterArray;
var randomX;
var y;
var objectHeight;
var objectWidth;
var selectedimg;

p5.disableFriendlyErrors = true;

/*preload our images*/
function preload() {
  blue_club = loadImage('assets/blue.png');
  pink_club = loadImage('assets/pink_juggle_club.png');
  red_ball = loadImage('assets/red_ball.png');
  purple_ball = loadImage('assets/purple_ball.png');
  unicorn = loadImage('assets/unciron_game.png');
  rainbow = loadImage('assets/rainbow2.svg');
  dog = loadImage('assets/dino_dog.png');
  star = loadImage('assets/star_glitter.png');
  pink_glitter = loadImage('assets/pink_glitter.png');
  orange_feather = loadImage('assets/orange_feather.png');
  fire = loadImage('assets/fire_torch.png');
}

/* set up the canvas */
function setup() {
  var mainCanvas = createCanvas(windowWidth, windowHeight);
  mainCanvas.background(0);
  mainCanvas.parent('mainSketch');

  /*Set our main character */
  mainCharacter = new Main_Character();

  /*Set Level*/
  level = 1;
  console.log("this is level", level);

  /*Call init function to initialize arrays*/
  init();

  /*display instructions before game begins*/
  var instruction = select('#instructions');
  instruction.removeClass('nodisplay');
  instruction.addClass('display');
  noLoop();
  /*do no proceed to draw loop (game start) until user has clicked the start button*/
  var startButton = select('#start');
  startButton.mousePressed(() => {
    console.log('click');
    instruction.removeClass('display');
    instruction.addClass('nodisplay');
    loop();
  });
}

//Change canvas height and update the y coordinate for the rectangle object when resizing screen
window.addEventListener('resize', function(){
  console.log("window height changed");
  resizeCanvas(windowWidth, windowHeight);
});

/* initialize the first item of the juggleArray and set three rainbows into our lives array */
function init() {

  //Points start as zero//
  points = 0;
  document.getElementById("counter").innerHTML = points;

  //initialize our juggle array//
  juggleArray = [];
  for(var i =0; i < 1; i ++){
    setVariables();
    juggleArray.push(new Juggle(selectedimg, y, randomX,objectHeight, objectWidth))
  }

  //initialize our lives array//
  livesArray = [];
  for(var i=0; i < 2; i++) {
    livesArray.push(rainbow);
  }

  //initialize our glitter array//
  glitterArray = [];
}

/*After we have our initial array.  An interval function will call this function and we will push
a new juggle item to our juggleArray every x miliseconds.  This way our array items don't display
on screen all at one time*/
function addToArray() {

    for(var i =0; i < 1; i ++){
      setVariables();
      juggleArray.push(new Juggle(selectedimg, y, randomX, objectHeight, objectWidth))
    }
  /*if(level === 2){
    for(var i=0; i< 3; i++){
      var img = colorSelect();
      var x = random(1, width-20);
      glitterArray.push(new Glitter(x, img))
    }
  }*/
}

function resetSketch(){
  var restart = select('#restart');
  restart.removeClass('display');
  restart.addClass('nodisplay');
  var a = select('.end');
  a.removeClass('end');
  a.addClass('bg');
  gameCounter = 0;
  counter = 0;
  init();
  loop();
}

var counter = 0;
var gameCounter = 0;

function draw() {  
  /*Create intervals to set how frequently an array object should appear on the screen.  Speed up
  as the game progresses */
  counter++;
  gameCounter++;
  
  if(gameCounter === 4500){
    console.log("game over");
    counter = 0;
  }
  if(gameCounter >= 3000){
    while(counter === 5){
      addToArray();
      counter = 0;
    }
  }
  if(gameCounter >= 2000){
    while(counter===30){
      addToArray();
      counter=0;
    }
  }
  if(gameCounter >= 1000){
    while(counter === 60){
      addToArray();
      counter = 0;
    }
  }
  if(gameCounter < 1000){
    while(counter === 90){
      addToArray();
      counter = 0;
    }
  }
  
  /*clear canvas before each new drawing*/
  clear();
  
  /*If no lives remain, end game.  Change the background image to display the game over background.
  Display the restart button. Stop the draw loop.  Call restart function if user clicks the restart 
  button */
  if(livesArray.length === 0 || gameCounter === 4500){
    console.log('game over');
    var restart = select('#restart');
    restart.removeClass('nodisplay');
    restart.addClass('display');
    var a = select('.bg');
    a.removeClass('bg');
    a.addClass('end');
    var button = select('#restartButton');
    button.mousePressed(resetSketch);
    noLoop();
  }

  /* If lives is not equal to zero, cycle through our livesArray and juggle Array.  */
  else{
    /* draw each rainbow life */
    var x = windowWidth - 20;
    for(var i = 0; i < livesArray.length; i ++) {
      x = x - 65;
      image(livesArray[i], x, 15, 60, 50);
    }

    /*if(level === 2){
      for(var i=0; i < glitterArray.length; i++) {
        if(glitterArray[i].y > height){
          glitterArray.splice(i,1);
        }else{
          glitterArray[i].update(i);
        }
      }
    }*/

    if(level === 1){
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
    }
  }

   /* Update the main Character */
   mainCharacter.update();
}


/* run http-server. */
