function Unicorn(){
  this.image = unicorn;
  this.objectHeight = 90;
  this.objectWidth = 80;
  this.x = width / 2 - (this.objectWidth / 2);
  this.y = height - this.objectHeight;

  this.update = function() {
    this.draw();

  }

  this.draw = function() {
    image(this.image, this.x, this.y, this.objectWidth, this.objectHeight);
  }
}
