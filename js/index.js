import BUBBLE from "./bubble.js";

let canvas = document.getElementById("bubbleBg");
let ctx = canvas.getContext("2d");

const BGWIDTH = 600;
const BGHEIGHT = 500;
const RADIUS = 50;

canvas.width = BGWIDTH;
canvas.height = BGHEIGHT;

let bubbles = [];
let target = 0;
for (let i = 0; i < 50; i++) {
  let x = Math.random() * (BGWIDTH - RADIUS * 2) + RADIUS;
  let y = Math.random() * (BGHEIGHT - RADIUS * 2) + RADIUS;
  let dx = Math.random() - 0.5;
  let dy = Math.random() - 0.5;
  target = i === 49 ? 1 : 0;
  bubbles.push(new BUBBLE(ctx, x, y, dx, dy, RADIUS, BGWIDTH, BGHEIGHT, target));
}

function main() {
  ctx.clearRect(0, 0, BGWIDTH, BGHEIGHT);
  bubbles.forEach(bubble => {
    bubble.update();
    bubble.judge();
  });
  requestAnimationFrame(main);
}

main();