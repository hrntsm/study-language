let lines = [];
let fromPt = null;
let toPt = null;
let hasFromPt = false;
let hasToPt = false;
let ptList = [];
let clickCount = 0;
let polyline = [];

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
  }

  let index = minDistIndex(lines);
  let pt = checkWithinLineEndPoint(lines[index], 30);

  // snap to line
  if (pt) {
    noFill();
    circle(pt.x, pt.y, 10);
  } else if (lines[index].mouseDist() < 50) {
    pt = lines[index].snapPoint();
  }

  //draw new polyline
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      if (!hasFromPt) {
        fromPt = pt ? pt : new bPoint(mouseX, mouseY);
        hasFromPt = true;
        ptList.push(fromPt);
      } else if (clickCount > 10) {
        toPt = pt ? pt : new bPoint(mouseX, mouseY);
        hasToPt = true;
        clickCount = 0;
        ptList.push(toPt);

      }
      clickCount++;
      console.log(clickCount);
    } else if (mouseButton === RIGHT) {
      hasToPt = false;
      hasFromPt = false;
      fromPt = null;
      toPt = null;
      ptList = [];
    }
  }

  if (hasFromPt) {
    if (!hasToPt) {
      tempLine = new bLine(fromPt, new bPoint(mouseX, mouseY));
      tempLine.draw();
    } else if (hasToPt) {
      lines.push(new bLine(fromPt, toPt));
      fromPt = toPt;
      toPt = null;
      hasFromPt = true;
      hasToPt = false;
    }
  }
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    hasToPt = false;
    hasFromPt = false;
    fromPt = null;
    toPt = null;
    ptList = [];
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

  return index;
}

function checkWithinLineEndPoint(line, distance = 30) {
  let fromDist = line.from.mouseDist();
  let toDist = line.to.mouseDist();

  minDist = min(fromDist, toDist);
  minPt = fromDist < toDist ? line.from : line.to;

  if (minDist < distance) {
    pt = minPt;
  } else {
    pt = null;
  }

  return pt;
}

class bPolyline {
  ptList = [];

  constructor(ptList) {
    this.ptList = ptList;
  }

  addPoint(pt) {
    this.ptList.push(pt);
  }

  draw() {
    for (let i = 0; i < this.ptList.length - 1; i++) {
      line(this.ptList[i].x, this.ptList[i].y, this.ptList[i + 1].x, this.ptList[i + 1].y);
    }
  }

  isClosed() {
    return this.ptList[0].x === this.ptList[this.ptList.length - 1].x && this.ptList[0].y === this.ptList[this.ptList.length - 1].y
      ? true : false;
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
      return new bPoint(x, y);
    }

    return null;
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