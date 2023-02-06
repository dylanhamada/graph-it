const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

let canvasHeight = canvas.clientHeight;
let canvasWidth = canvas.clientWidth;
let graphWidth = canvasWidth * 0.7;
let graphHeight = canvasHeight * 0.65;

// the canvas coordinates of the (0, 0) point on the graph
let originX = canvasWidth * 0.15;
let originY = canvasHeight * 0.85;

// hypothetical user inputs or variables derived from inputs
const userVals = [20, 5, 15, 10, 15, 20];
const maxUserVal = Math.max(...userVals); // maximum value in userVals
const numLines = 6; // number of horizontal lines
const yIntervals = graphHeight / numLines; // the vertical intervals between lines on the graph
const xIntervals = graphWidth / userVals.length; // the horizontal intervals between bars on the graph
const barWidth = xIntervals * 0.75; // the width of each bar, 75% the width of xIntervals
const maxGraphVal = Math.ceil((maxUserVal * 1.05) / numLines) * numLines; // the vertical limit of the graph, calculated by going 5% above the maximum user limit and cleanly divisible by the number of lines

// use a loop to draw "numLines" number of lines on the graph
for (let i = 0; i <= 6; i++) {
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(originX, originY - yIntervals * i);
  ctx.lineTo(originX + graphWidth, originY - yIntervals * i);
  ctx.stroke();
}

// function to draw a bar
// take x-coord, width, height as arguments
function drawBar(x, yVal) {
  // calculate pixel height of bar using ratio of graph max height and value to bar height and user value
  const barHeight = (graphHeight / maxGraphVal) * yVal;

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.roundRect(x, originY, barWidth, -barHeight, [0, 0, 4, 4]);
  ctx.fill();
}

// iterate through userVals and draw each bar
for (let i = 0; i <= userVals.length; i++) {
  drawBar(originX + xIntervals * i, userVals[i]);
}
