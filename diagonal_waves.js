var w; // Width of entire wave, in pixels
var theta = 0.0; // Start angle at 0
var amplitude = 75.0; // How high is the wave
var period = 300.0; // How many pixels before the wave repeats
var dx; // Value for incrementing x
var yvalues1, yvalues2, yvalues3; // Using arrays to store height values for the waves
var xspacing = 8; // How smooth the curve should be. Small value=more smooth
var animationSpeed = 0.05; // How fast the wave should travel
var howHigh1 = 150; // How far away (in pixels) is the first wave from the bottom of the screen
var howHigh2 = 250; // How far away (in pixels) is the second wave from the bottom of the screen
var howHigh3 = 350; // How far away (in pixels) is the third wave from the bottom of the screen

var canvas;

function setup() {
  canvas = createCanvas(710, 500);
  canvas.position(750, 50);
  canvas.style("z-index: -1");

  // Calculations for drawing the sin wave
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues1 = new Array(floor(w / xspacing));
  yvalues2 = new Array(floor(w / xspacing));
  yvalues3 = new Array(floor(w / xspacing));
}

function draw() {
  background(255, 255, 255, 0);
  stroke(0, 139, 139);
  noFill();
  strokeWeight(12);

  calcWaves(); // Calculate the points on the waves
  renderWaves(); // Draw the waves
}

// Functions to calculate the waves
function calcWaves() {
  // Increment theta to animate the waves (try different values for different speeds)
  theta += animationSpeed;

  // Calculate the y values for each wave
  let x = theta;
  for (let i = 0; i < yvalues1.length; i++) {
    yvalues1[i] = sin(x) * amplitude;
    x += dx;
  }

  x = theta //+ PI / 3; // Phase shift for second wave
  for (let i = 0; i < yvalues2.length; i++) {
    yvalues2[i] = sin(x) * amplitude;
    x += dx;
  }

  x = theta //+ 2 * PI / 3; // Phase shift for third wave
  for (let i = 0; i < yvalues3.length; i++) {
    yvalues3[i] = sin(x) * amplitude;
    x += dx;
  }
}

// Function to draw the waves
function renderWaves() {
  // Clear the background with transparency
  clear();

  // Draw each wave separately with noFill() to prevent combination
  noFill();

  // Draw the first wave
  stroke(0, 139, 139); // Set stroke color for the first wave

  beginShape();
  // Draw the first wave
  for (let x = 0; x < yvalues1.length; x++) {
    let y1 = height + howHigh1 + yvalues1[x];
    let diagonalOffset1 = -(x * xspacing + x * 0.5) * tan(PI / 4); // Diagonal offset
    vertex(x * xspacing + x * 0.5, y1 + diagonalOffset1);
  }
  endShape();

  // Draw the second wave
  beginShape();
  for (let x = 0; x < yvalues2.length; x++) {
    let y2 = height + howHigh2 + yvalues2[x];
    let diagonalOffset2 = -(x * xspacing + x * 0.5) * tan(PI / 4); // Diagonal offset
    vertex(x * xspacing + x * 0.5, y2 + diagonalOffset2);
  }
  endShape();

  // Draw the third wave
  beginShape();
  for (let x = 0; x < yvalues3.length; x++) {
    let y3 = height + howHigh3 + yvalues3[x];
    let diagonalOffset3 = -(x * xspacing + x * 0.5) * tan(PI / 4); // Diagonal offset
    vertex(x * xspacing + x * 0.5, y3 + diagonalOffset3);
  }
  endShape();
}
