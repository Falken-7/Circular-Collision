var circle1;
var circle2;

function setup() { 
  createCanvas(400, 400);
  circle1 = new Bubble1();
  circle1.debug = true;
  circle2 = new Bubble1();
  ellipseMode(CENTER);
} 

function draw() { 
  background("black");
  
  circle1.display();
  circle2.display();
var d = dist(circle1.x, circle1.y, circle2.x, circle2.y);

  if (d < circle1.r + circle2.r) {
    
    circle1.changeColor();
  	circle2.changeColor();
   
  }
}

function Bubble1() {
  this.x = random(100, 175);
  this.y = random(100, 175);
  this.r = 25;
  this.col = color("blue");
  
  this.display = function() {
    ellipse(this.x, this.y, this.r*2);
    fill(this.col);
  }
  
  this.changeColor = function() {
    this.col = color("white");
  }
}