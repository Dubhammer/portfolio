let shapes;
let drawing = false;
let angle = 0;
let trans = 255;
let sz;
let s1 = 100;
let s2 = 200;

function preload() {
  shapes = loadImage('img/nib3.svg')
}

function setup() {
  createCanvas(800, 650);
  background(255, 251, 179);
  angleMode(DEGREES);
}

function draw() {

  if (drawing) {
    push();

    from = color(238, 130, 238, trans);
    to = color(0, 151, 255, trans);
    colorMode(RGB)
    c1 = lerpColor(from, to, 0.3);
    c2 = lerpColor(from, to, 0.5);


    translate(mouseX, mouseY);
    sz = random(s1, s2);
    rotate(angle);
    let img = shapes;
    tint(from);
    image(img,random(width), random(height), sz, sz);
    tint(c1);
    image(img,random(width), random(height), sz, sz);
    tint(c2);
    image(img,random(width), random(height), sz, sz);
    tint(to);
    image(img,random(width), random(height), sz, sz);

    pop();
    
  }
  
  if (keyIsDown(65)) {
    trans = random(255);
  } 
  
  if (keyIsDown(87)) {
    angle += 5;
  } 
  
  if (keyIsDown(83)) {
    angle -= 5;
  }
  
  if (keyIsDown(68)) {
    s1 = 10;
    s2 = 60;
  }
  
  if (keyIsDown(32)) {
    trans = 255;
    angle = 0;
    s1 = 100;
    s2 = 200;
  }
  
  if (keyIsDown(82)) {
    clear();
    createCanvas(800, 650);
    background(255, 251, 179);
    trans = 255;
    angle = 0;
    s1 = 100;
    s2 = 200;
  }

}

function mousePressed() {
  drawing = true;
}

function mouseReleased() {
  drawing = false;
}

