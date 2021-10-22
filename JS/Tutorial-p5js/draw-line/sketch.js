
let ptStart = [0, 0]

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    line(ptStart[0], ptStart[1], mouseX, mouseY);
    ptStart = [mouseX, mouseY]
  }
}
