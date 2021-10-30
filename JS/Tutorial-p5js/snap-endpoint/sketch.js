let lines = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 10; i++) {
    lines.push(new bLine(new bPoint(random(width), random(height)), new bPoint(random(width), random(height))));
  }
}

function draw() {
  background(220);

  for (let i = 0; i < lines.length; i++) {
    lines[i].draw();
  }

  let index, pt = minDistIndex(lines);
  if (pt) {
    noFill();
    circle(pt.x, pt.y, 10);
  } else {
    lines[index].snapPoint();
  }
}

function minDistIndex(lineArray) {
  let index = 0;
  let value = +Infinity;
  for (let i = 0; i < lineArray.length; i++) {
    let dist = lineArray[i].mouseDist();
    if (dist < value) {
      value = dist;
      index = i;
    }
  }

  minPt = null
  let ptIndex = 0;
  let ptValue = +Infinity;
  for (let i = 0; i < lineArray.length; i++) {
    let fromDist = lineArray[i].from.mouseDist();
    let toDist = lineArray[i].to.mouseDist();

    minDist = min(fromDist, toDist);
    minPt = fromDist < toDist ? lineArray[i].from : lineArray[i].to;

    if (minDist < ptValue) {
      ptValue = minDist;
      ptIndex = i;
    }
  }

  // if (ptValue < 30) {
    // pt = minPt;
  // }
  pt = null

  return index, pt;
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

  snapPoint() {
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

  mouseDist() {
    return Math.sqrt((this.x - mouseX) ** 2 + (this.y - mouseY) ** 2);
  }
}