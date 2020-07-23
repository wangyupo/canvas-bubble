var mouse = {
  x: undefined,
  y: undefined
}
var maxRadius = 40;
var colorArray = [
  '#D98832',
  '#DDE334',
  '#39CC8A',
  '#3453E3',
  '#DB30BD'
];
window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

export default class bubble {
  constructor(ctx, x, y, dx, dy, radius, bgwidth, bgheight) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.bgwidth = bgwidth;
    this.bgheight = bgheight;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  update() {
    if (this.x + this.radius >= this.bgwidth || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius >= this.bgheight || this.y - this.radius <= 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    if (Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < 50) {
      if (this.radius < maxRadius)
        this.radius += 1;
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}