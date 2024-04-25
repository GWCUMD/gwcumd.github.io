let xspacing = 1; // Decreased x-spacing for a skinnier wave
let w;
let theta = 0.0;
let amplitude = 15.0; // Reduced amplitude for a skinnier wave
let period = 200.0;
let dx;
let yvalues;
let thetaIncrement = 0.05; // Increased increment for faster animation

function setup() {
  createCanvas(710, 400);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(255, 255, 255, 0);
  stroke(0, 139, 139);
  noFill();
  strokeWeight(4); // Reduced stroke weight for a skinnier wave

  calcWave();
  renderWave(); 
}

function calcWave() {
  theta += thetaIncrement; // Increase theta by thetaIncrement for faster animation

  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  clear();
  noFill();
  stroke(0, 139, 139); 

  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 4, 4); // Smaller ellipse for a skinnier wave
  }
}
