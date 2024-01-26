let value1 = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;
let darkcolour = 'rgba(255, 42, 0, 1)';
let x = 5;

function setup() {
  // put setup code here
  createCanvas(800, 650);
  background(255, 251, 179);
}

function draw() {
  // background(255, 251, 179);  
  //put drawing code here
  //fill(random (255),random(255),random(255));
  //fill('#B001FC ');


  // stroke(color(value1, value2, value3,5));
  // fill(value1, value2, value3, 10);
  // arc(mouseX, mouseY, 120, 120, 0, PI + QUARTER_PI, CHORD);
  // rect(30, 20, 150, 150, 100, 100, 60, 60);
  // strokeWeight(5);
  // stroke(135, 0, 0);
  // arc(mouseX, mouseY, value2, value2, 700, 0.58, CHORD);
  // fill('rgba(255, 42, 0, 1)');
  // fill(255, 42, 0);
  // noStroke();

  if (mouseIsPressed) {
    // let x = random(0, TWO_PI);
    // translate (value2 /2, value2 /2);
    // rotate(x);
    arc(mouseX, mouseY, value4, value4, 700, 0.58, CHORD);
    strokeWeight(x);
    stroke(135, 0, 0);
    rotate(PI / 3.0);
    fill(darkcolour);
  } else {

  }

}

function mouseClicked() {
  value1 = (random (255));
  value2 = (random (255));
  value3 = (random (255));
  value4 = random(50, 200);
}

function keyPressed() {
  if (keyCode === 83) {
    darkcolour = ('rgba(56, 9, 0, 1)');
    x = 5;
  } else if (keyCode === 87) {
    darkcolour = ('rgba(255, 162, 143, 1)');
    x = 5;
  } else if (keyCode === 65){
    darkcolour = ('rgba(255, 42, 0, 1)');
    x = 5;
  } else if (keyCode === 68){
    darkcolour = ('rgba(255, 255, 255, 0)');
    value4 = random(800, 800);
    strokeWeight(1);
    x = 1;
  }else if (keyCode === 82) {
    clear();
    createCanvas(800, 650);
    background(255, 251, 179);
    value4 = random(800, 800);
    strokeWeight(1);
    x = 1;
  }
}


