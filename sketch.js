// Kaleidoscope Snowflake
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/155-kaleidoscope-snowflake.html
// https://youtu.be/R3C2giDfmO8
// https://editor.p5js.org/codingtrain/sketches/JbWCVPX5a

let symmetry = 6;
let angle = 360 / symmetry;
let saveButton;
let clearButton;
let slider;
let xoff = 0;
var black;
var white;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background(127);
  black = createButton('black screen');
  white = createButton('white screen');
  saveButton = createButton('save');
  saveButton.mousePressed(saveSnowflake);
  black.mousePressed(bgblack);
  white.mousePressed(bgwhite);    
  clearButton = createButton('clear');
  clearButton.mousePressed(clearCanvas);
  slider = createSlider(1, 32, 4, 0.1);
  //colorMode(HSB);
}

function saveSnowflake() {
  save('snowflake.png');
}

function clearCanvas() {
  background(127);
}

function bgblack () {
  background(51);
}

function bgwhite () {
  background(200);
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    if (mouseIsPressed) {
      let hu = map(sin(xoff), -1, 1, 0, 255);
      xoff += 1;
      stroke(hu, 100);
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        //let d = dist(mx, my, pmx, pmy);
        //let sw = map(d, 0, 16, 16, 2);
        let sw = slider.value();
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}
