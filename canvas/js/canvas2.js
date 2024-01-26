let shapes;
let drawing = false;
let trans = 255;

function preload() {
  shapes = loadImage('img/nib3.svg')
}

function setup() {
  createCanvas(800, 650);
  background(255, 251, 179);
}

function draw() {

  if (drawing) {
    push();

    translate(mouseX, mouseY);
    let sz = random(180, 200);
    let rot = random(0, TWO_PI);
    rotate(rot);
    let img = shapes;
    tint(random(255), random(255), random(255), trans);
    // tint(255, 42, 0);
    image(img, 0, 0, sz, sz);

    pop();
  }

}

function mousePressed() {
  drawing = true;
}

function mouseReleased() {
  drawing = false;
}

function keyPressed() {
  if (keyCode === 65) {
    trans-=50;
  } else if (keyCode === 68) {
    trans+=50;
  } else if (keyCode === 32) {
    trans = 255;
  } else if (keyCode === 82) {
    clear();
    createCanvas(800, 650);
    background(255, 251, 179);
    trans = 255;
  }
}
