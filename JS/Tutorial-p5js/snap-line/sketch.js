let lines = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 1; i++) {
    lines.push(new bLine(new bPoint(random(width), random(height)), new bPoint(random(width), random(height))));
  }
}

function draw() {
  background(220);

  for (let i = 0; i < lines.length; i++) {
    lines[i].draw();

    if (lines[i].mouseDist() < 20) {
      lines[i].intersectPoint();
    }
  }
}


class bLine {
  from;
  to;
  a1;
  b1;
  a2;
  b2;

  constructor(from, to) {
    this.from = from;
    this.to = to;

    this.a1 = - ((to.y - from.y) / (to.x - from.x));
    this.b1 = - (this.a1 * to.x + to.y);
    this.a2 = - (1 / this.a1);
  }

  draw() {
    line(this.from.x, this.from.y, this.to.x, this.to.y);
  }

  mouseDist() {
    return Math.abs(this.a1 * mouseX + mouseY + this.b1) / Math.sqrt(this.a1 * this.a1 + 1);
  }

  intersectPoint() {
    let maxX = Math.max(this.from.x, this.to.x);
    let minX = Math.min(this.from.x, this.to.x);
    let maxY = Math.max(this.from.y, this.to.y);
    let minY = Math.min(this.from.y, this.to.y);

    this.b2 = -(this.a2 * mouseX + mouseY);

    let x = (this.b2 - this.b1) / (this.a1 - this.a2);
    let y = -(this.a1 * x + this.b1);

    if (x > minX && x < maxX && y > minY && y < maxY) {
      noFill();
      circle(x, y, 10);
    }
  }
}

class bPoint {
  x;
  y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}