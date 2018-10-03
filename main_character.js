function Main_Character(){
  this.image = unicorn;
  this.objectHeight = 90;
  this.objectWidth = 80;
  this.x = width / 2 - (this.objectWidth / 2);
  this.y = height - this.objectHeight;
  this.xspeed = 0;

  this.update = function() {
    this.x = this.x + this.xspeed;
    this.draw();
  }

  this.draw = function() {
    image(this.image, this.x, this.y, this.objectWidth, this.objectHeight);
  }

  this.dir = function(x) {
    console.log("x", x);
    console.log("key pressed");
    this.xspeed = x;
  }
}

function keyReleased() {
  if(keyCode === RIGHT_ARROW){
    mainCharacter.dir(0);
  }else if(keyCode === LEFT_ARROW){
    mainCharacter.dir(0);
  }
}

function keyPressed() {
  if(keyCode === RIGHT_ARROW){
    mainCharacter.dir(3);
  }else if(keyCode === LEFT_ARROW){
    mainCharacter.dir(-3);
  }
}