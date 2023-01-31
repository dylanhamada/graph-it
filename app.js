const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

// canvas and graph dimensions
let canvasHeight = canvas.clientHeight;
let canvasWidth = canvas.clientWidth;
let graphWidth = canvasWidth * 0.75;
let graphHeight = canvasHeight * 0.7;
let extraX = (canvasWidth - graphWidth) / 2;
let extraY = (canvasHeight - graphHeight) / 2;

// calculate portions of graph
const numLines = 5;
const lineIntervals = graphHeight / numLines;

// derived values from user input
// maximum user-entered value
const maxVal = 57;
// value of top line on graph
const maxGraph = Math.ceil((maxVal / numLines) * 1.05);

function drawLines(numLines) {
  ctx.lineWidth = 1;

  for (let i = 0; i <= numLines; i++) {
    ctx.beginPath();
    // lines are drawn starting from the top
    ctx.moveTo(extraX, extraY + lineIntervals * i);
    ctx.lineTo(canvasWidth - extraX, extraY + lineIntervals * i);
    ctx.stroke();
  }
}

function drawBar() {
  // if graph bottom line is 0, and top is maxGraph, how to calculate height of a bar with y-value, k?
  // say bottom line is 0, top is 60, and a bar has k of 37
}

drawLines(numLines);

// const numBars = 6;
// const maxHeight = 10;
// // function to draw a bar
// // function takes as arguments y-value, bar number (in sequence)
// function drawBar(yVal, barNum) {
//   // calculate bar width based on total bars to be rendered
//   const barWidth = (graphWidth / numBars) * 0.75;
//   // calculate starting x-position
//   // if bar #1, draw it at origin (0, 0)
//   const xPos = canvasWidth - graphWidth + barWidth * barNum;
//   // calculate starting y-position
//   const yPos = canvasHeight - graphHeight / 6;
//   // calculate how "tall" to grow the bar
//   const barHeight = (graphHeight / maxHeight) * yVal;
//   console.log(barHeight);
//   console.log(graphHeight);
//   // fill rectangle
//   ctx.fillStyle = "red";
//   ctx.beginPath();
//   ctx.roundRect(xPos, yPos, barWidth, -barHeight, [0, 0, 5, 5]);
//   ctx.fill();
// }
