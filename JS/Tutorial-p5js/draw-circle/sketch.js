let circle;

function setup() {
  createCanvas(500, 500);
  ellipseMode(RADIUS);
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
    if (dist(mouseX, mouseY, this.x, this.y) < this.r) {
      if (mouseIsPressed) {
        fill(255, 0, 0);

        this.x = mouseX;
        this.y = mouseY;
      } else {
        fill(0, 255, 0);
      }
    }
    else {
      fill(0, 0, 255);
    }

    ellipse(this.x, this.y, this.r, this.r);
  }
}
