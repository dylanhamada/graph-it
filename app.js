const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

let canvasHeight = canvas.clientHeight;
let canvasWidth = canvas.clientWidth;
let graphWidth = canvasWidth * 0.9;
let graphHeight = canvasHeight * 0.8;

ctx.lineWidth = 1;

// loop to draw horizontal lines, including x-axis
function drawHorizontals(num) {
  for (let i = 1; i <= num; i++) {
    ctx.beginPath();
    ctx.moveTo(canvasWidth - graphWidth, canvasHeight - (graphHeight / 6) * i);
    ctx.lineTo(graphWidth, canvasHeight - (graphHeight / 6) * i);
    ctx.stroke();
  }
}

const numBars = 6;
const maxHeight = 10;
// function to draw a bar
// function takes as arguments y-value, bar number (in sequence)
function drawBar(yVal, barNum) {
  // calculate bar width based on total bars to be rendered
  const barWidth = (graphWidth / numBars) * 0.75;
  // calculate starting x-position
  // if bar #1, draw it at origin (0, 0)
  const xPos = canvasWidth - graphWidth + barWidth * barNum;
  // calculate starting y-position
  const yPos = canvasHeight - graphHeight / 6;
  // calculate how "tall" to grow the bar
  const barHeight = (graphHeight / maxHeight) * yVal;
  console.log(barHeight);
  console.log(graphHeight);
  // fill rectangle
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.roundRect(xPos, yPos, barWidth, -barHeight, [0, 0, 5, 5]);
  ctx.fill();
}

drawHorizontals(6);
drawBar(8, 0);
