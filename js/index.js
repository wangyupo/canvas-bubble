import BUBBLE from "./bubble.js";

let canvas = document.getElementById("bubbleBg");
let ctx = canvas.getContext("2d");

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

window.addEventListener("resize", function (event) {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  init();
});

let bubbles = [];
function init() {
  bubbles = []
  for (let i = 0; i < 800; i++) {
    let radius = Math.random() * 3 + 1;
    let x = Math.random() * (canvas.width - radius * 2) + radius;
    let y = Math.random() * (canvas.height - radius * 2) + radius;
    let dx = Math.random() - 0.5;
    let dy = Math.random() - 0.5;
    bubbles.push(new BUBBLE(ctx, x, y, dx, dy, radius, canvas.width, canvas.height));
  }
}

function main() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bubbles.forEach(bubble => {
    bubble.update();
  });
  requestAnimationFrame(main);
}

init();
main();