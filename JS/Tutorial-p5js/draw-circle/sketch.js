let circles = [];

function setup() {
  createCanvas(500, 500);
  ellipseMode(RADIUS);

  for (let i = 0; i < 10; i++) {
    circles.push(new Circle(random(width), random(height), random(10, 50)));
  }
}

function draw() {
  background(0);

  for (let i = 0; i < circles.length; i++) {
    circles[i].draw();
  }
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
