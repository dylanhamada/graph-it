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
const maxUserVal = 59; // maximum value entered by a user
const numLines = 6; // number of horizontal lines depending on how big the screen is
let yIntervals = graphHeight / numLines; // the vertical space between lines on the graph
let maxGraphVal = Math.ceil((maxUserVal * 1.05) / numLines) * numLines; // the vertical limit of the graph, calculated by going 5% above the maximum user limit and cleanly divisible by the number of lines
let barHeight = (graphHeight / maxGraphVal) * maxUserVal; // the height of a bar, calculated by using a ratio of the graph height and max graph value, to the bar height (unknown) and user value

// use a loop to draw "numLines" number of lines on the graph
for (let i = 0; i <= 6; i++) {
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(originX, originY - yIntervals * i);
  ctx.lineTo(originX + graphWidth, originY - yIntervals * i);
  ctx.stroke();
}

// draw a bar on the graph that has value "59"
ctx.fillStyle = "red";
ctx.beginPath();
ctx.roundRect(originX, originY, 50, -barHeight, [0, 0, 4, 4]);
ctx.fill();
