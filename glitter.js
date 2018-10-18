/*Level 2, Not sure if I will keep this level */

/*function Glitter( x, img) {
  this.y = 15;
  this.x = x;
  this.img = img;
  this.cx = this.x + (this.x / 2);
  this.cy = this.y + (this.y / 2);
 
  this.draw = function() {
    //draw ellipse with the color//
    var c = color(255, 204, 0);
    fill(c);
    image(this.img, this.x, this.y, 50, 50);
  }

  this.update = function(i) {
    var index = i;

    //update the y-coordinate//
    this.y = this.y + 5;
    console.log("main character cx", mainCharacter.cx);

    var squareRT = Math.sqrt(Math.pow((this.cx - mainCharacter.cx), 2) + Math.pow((this.cy - mainCharacter.cy),2) );
   
    console.log(squareRT);
    if(squareRT < 40){
      if(this.img === orange_feather){
        points++;
      }else{
        points--;
      }
      document.getElementById("counter").innerHTML = points;
      glitterArray.splice(index, 1);
    }
    /*if(squareRT < 40){
      if(this.img === orange_feather){
        points++;
        document.getElementById("counter").innerHTML = points;
        glitterArray.splice(index, 1);
      }else{
        points--;
        document.getElementById("counter").innerHTML = points;
        glitterArray.splice(index, 1);
      }  
    }*/
    
 /*   this.draw(); 
  }
}

function colorSelect(){
  var r = Math.floor(Math.random() * 3);
  switch(r){
    case 0:
      return pink_glitter;
    case 1:
      return star;
    case 2:
      return orange_feather;
  }
}
*/