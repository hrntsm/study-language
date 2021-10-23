let circle;

function setup() {
  createCanvas(500, 500);
  ellipseMode(CENTER);
  circle = new Circle(100, 200, 50);
}

function draw() {
  background(0);
  circle.draw();
}

class Circle {
  x;
  y;
  r;

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  draw() {
    ellipse(this.x, this.y, this.r, this.r);
  }
}
