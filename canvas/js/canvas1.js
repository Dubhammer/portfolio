let shapes;
let drawing = false;
let rot = 0;
let darkcolour = 'rgba(255, 42, 0, 1)';


function preload() {
  shapes = loadImage('img/nib3.svg');
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
    // let rot = random(0, TWO_PI);
    rotate(rot);
    let img = shapes;
    // tint(random(255), random(255), random(255), 255);
    tint(darkcolour);
    image(img, 0, 0, sz, sz);


    pop();
  }

  if (keyIsDown(87)) {
    rot -= 50;
  }

  if (keyIsDown(83)) {
    rot += 50;
  }

  if (keyIsDown(32)) {
    rot = 0;
    darkcolour = ('rgba(255, 42, 0, 1)');
  }

  if (keyIsDown(65)) {
    darkcolour = ('rgba(56, 9, 0, 1)');
  }

  if (keyIsDown(68)) {
    darkcolour = ('rgba(255, 162, 143, 1)');
  }

  if (keyIsDown(88)) {
    darkcolour = ('rgba(255, 42, 0, 1)');
  }

  if (keyIsDown(82)) {
    clear();
    createCanvas(800, 650);
    background(255, 251, 179);
    rot = 0;
    darkcolour = ('rgba(255, 42, 0, 1)');
  }

}

function mousePressed() {
  drawing = true;
}

function mouseReleased() {
  drawing = false;
}

// function keyPressed() {
//   if (keyCode === 87) {
//     rot -= 50;
//   } else if (keyCode === 83) {
//     rot += 50;
//   } else if (keyCode === 32) {
//     rot = 0;
//   }
// }
