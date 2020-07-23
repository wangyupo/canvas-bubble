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
  target = i === 49 ? 1 : 0;
  bubbles.push(new BUBBLE(ctx, RADIUS, BGWIDTH, BGHEIGHT, target));
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