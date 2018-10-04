/* Juggle Class */
function Juggle(img, y, randomX, objectHeight, objectWidth) {
  this.img = img;
  this.x = randomX;
  this.y = y;
  this.objectHeight = objectHeight;
  this.objectWidth = objectWidth;

  this.draw = function(){
    image(this.img, this.x, this.y, this.objectWidth, this.objectHeight);//
  }

  this.update = function(i){
    var index = i;
    /* each time we call update we want the juggle object to travel further down the y-axis*/
    this.y = this.y + 1;
    /* set var x so we write less code */
    var x = this.x + this.objectWidth;
    /* if our juggle object contacts our main character.  We want to add a point and then remove the 
    juggle object from the array/screen */ 
    if(this.y >= (windowHeight - mainCharacter.objectHeight) && this.y <= windowHeight && 
    x >= mainCharacter.x && x <= (mainCharacter.x + mainCharacter.objectWidth) ){
      console.log("one point");
      itemArray.splice(index, 1);
    }
    /* we want to call draw after each update */
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

/*this function will set our variables for each item in our array*/
function setVariables() {
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
  
  }else{
    objectHeight = 50;
    objectWidth = 15;
  }
}