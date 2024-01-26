let shapes;
let drawing = false;
let trans = 255;
let rot = 0;

function preload() {
  shapes = loadImage('img/nib2.svg')
}

function setup() {
  createCanvas(800, 650);
  background(255, 251, 179);
}

function draw() {

  if (drawing) {
    push();

    translate(mouseX, mouseY);
    let sz = random(100, 1200);
    // let rot = random(0, TWO_PI);
    rotate(rot);
    let img = shapes;
    tint(random(255), random(255), random(255), trans);
    // tint(255, 42, 0);
    image(img, 0, 0, sz, sz);

    pop();
  }

  if (keyIsDown(87)) {
    rot -= 50;
  }

  if (keyIsDown(83)) {
    rot += 50;
  }

  if (keyIsDown(82)) {
    clear();
    createCanvas(800, 650);
    background(255, 251, 179);
    rot = 0;
    trans = 255;
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
    rot = 0;
  }
}
