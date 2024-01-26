let t = 0; 
let shapes;
let value1 = 80;
let value2 = 20;

function preload() {
  shapes = loadImage('img/nib1.svg')
}

function setup() {
  createCanvas(800, 650);
  noStroke();
}

function draw() {
  background(10, 10); // translucent background (creates trails)

  let img = shapes;
  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + value1 * cos(2 * PI * t + angle);
      const myY = y + value2 * sin(2 * PI * t + angle);

      image(img,myX, myY, 10, 10);

      if (keyIsDown(65)) {
        value1 -= 1
      } 
      
      if (keyIsDown(87)) {
        value2 += 1
      } 
      
      if (keyIsDown(83)) {
        value2 -= 1
      }
      
      if (keyIsDown(68)) {
        value1 += 1
      }
      
      if (keyIsDown(82)) {
        clear();
        createCanvas(800, 650);
        background(255, 251, 179);
        value1 = 80;
        value2 = 20;
      }


    }
  }

  t = t + 0.01; 
}

