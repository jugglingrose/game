/* Juggle Class */

function Juggle(img, y, randomX, objectHeight, objectWidth) {
  this.img = img;
  this.x = randomX;
  this.y = y;
  this.objectHeight = objectHeight;
  this.objectWidth = objectWidth;
  this.cx = this.x + (this.objectWidth/2);
  this.cy;
  
  this.draw = function(){
    image(this.img, this.x, this.y, this.objectWidth, this.objectHeight);//
  }

  this.update = function(i){
    
    var index = i;
    /* each time we call update we want the juggle object to travel further down the y-axis*/
    this.y = this.y + 3;
    /*calculate the mainCharacters center y-coordinate */
    this.cy = this.y + (this.objectHeight/2);
    
    /*calculate the distance between the character and the juggle objects.  If they touch,
    do something*/
    var squareRT = Math.sqrt(Math.pow((this.cx - mainCharacter.cx), 2) + Math.pow((this.cy - mainCharacter.cy),2) );
    
    if(this.img === dog) {
      if(squareRT < 110){
        /*points--;
        document.getElementById("counter").innerHTML = points;*/
        livesArray.splice(0,1);
        juggleArray.splice(index, 1);
      }
    }else{
      if(squareRT < 40){
        points++;
        document.getElementById("counter").innerHTML = points;
        juggleArray.splice(index, 1);
      }
    }
    /* we want to call draw after each update */
    this.draw();
  }
}

/*generate random img*/
function imgSelect(){
  console.log('img select called');
  /*select a random number from 0 to 4*/
  var r = Math.floor(Math.random() * 5);
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
    case 4:
      return dog;  
  }
}

/*this function will set our variables for each item in our array*/
function setVariables() {
  console.log("set variables function called inside juggle.js");
  /* y-axis */
  y = 15;

  /*select random number along x-axis */
  randomX = random(1, width-20);

  /*call imgSelect() to select a random image*/
  selectedimg = imgSelect();

  /*set height and width of objects depending on the type of selectedimg selected*/
  if(selectedimg === red_ball || selectedimg === purple_ball){
    objectHeight = 25;
    objectWidth = 25;
  }else if(selectedimg === dog){
    objectHeight = 175;
    objectWidth = 180;
  }
  else{
    objectHeight = 50;
    objectWidth = 15;
  }
}