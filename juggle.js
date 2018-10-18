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
    if(gameCounter < 1200){
      this.y = this.y + 3;
    }
    if(gameCounter >= 1200){
      this.y = this.y + 4;
    }
   
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
        if(this.img === fire){
          points--;
        }else{
          points++;
        }
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
  /*select a random number from 0 to 4*/
  var r = Math.floor(Math.random() * 6);
   switch( r ){
    case 0:
      return purple_ball;
    case 1:
      return blue_club;
    case 2:
      return red_ball;
    case 3:
      return pink_club;
    case 4:
      return dog; 
    case 5:
      return fire; 
  }
}

/*this function will set our variables for each item in our array*/
function setVariables() {
  /* y-axis */
  y = 15;

  /*call imgSelect() to select a random image*/
  selectedimg = imgSelect();

  /*set height and width of objects depending on the type of selectedimg selected*/
  if(selectedimg === red_ball || selectedimg === purple_ball){
    objectHeight = 25;
    objectWidth = 25;
  }else if(selectedimg === dog){
    objectHeight = 175;
    objectWidth = 180;
  }else if(selectedimg === fire){
    objectWidth = 50;
    objectHeight = 80;
  }
  else{
    objectHeight = 50;
    objectWidth = 15;
  }

  /*select random number along x-axis */
  randomX = random(1, width-objectWidth);
}