function Glitter( x) {
  this.y = 15;
  this.x = x;
 

  this.draw = function() {
    console.log("glitter draw called");
    //draw ellipse with the color//
    var c = color(255, 204, 0);
    fill(c);
    ellipse(this.x, this.y, 50, 50);
  }

  this.update = function() {
    //update the y-coordinate//
    this.y = this.y + 3;
    console.log("y:", this.y);
    this.draw(); 
  }
}

function colorSelect(){
  console.log('color select called');
  var r = Math.floor(Math.random() * 5);
  switch(r){
    case 0:
      return 'blue';
    case 1:
      return 'green';
    case 2:
      return 'pink';
  }
}
