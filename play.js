const { createCanvas } = require('canvas');

const canvasWidth = 800;
const canvasHeight = 400;

const canvas = createCanvas(canvasWidth, canvasHeight);
const context = canvas.getContext('2d');

let x = 0;
let y = canvasHeight - 50;
let velocityX = 5;
let velocityY = 0;

function update() {

  x += velocityX;
  y += velocityY;


  if (x <= 0 || x >= canvasWidth - 50) {
    velocityX *= -1;
  }


  if (y < canvasHeight - 50) {
    velocityY += 1;
  } else {
    y = canvasHeight - 50;
    velocityY = 0;
  }


  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.fillStyle = 'blue';
  context.fillRect(x, y, 50, 50);


  setTimeout(update, 16);
}

update();

module.exports = canvas;
