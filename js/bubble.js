import SCORE from "./score.js";
let score = new SCORE();

export default class bubble {
  constructor(ctx, x, y, dx, dy, radius, bgwidth, bgheight, target) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.bgwidth = bgwidth;
    this.bgheight = bgheight;
    this.target = target;
    this.targetX = 0;
    this.targetY = 0;

    this.clickX = 0;
    this.clickY = 0;
    document.addEventListener('click', event => {
      this.clickX = event.x;
      this.clickY = event.y;
    });
    // document.addEventListener('mouseup', event => {
    //   this.clickX = 0;
    //   this.clickY = 0;
    // });
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = "blue";
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    if (this.target) {
      this.ctx.fillStyle = "#00f";
      this.targetX = this.x;
      this.targetY = this.y;
      this.ctx.fill();
    } else {
      this.ctx.stroke();
    }
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
    this.draw();
  }

  judge() {
    if (!this.clickX || !this.targetX) return;
    //两点距离小于半径即为点中
    let dep = Math.sqrt(Math.pow((this.clickX - this.targetX), 2) + Math.pow((this.clickY - this.targetY), 2));
    if (dep < this.radius) {
      score.update();
      this.x = Math.random() * (this.bgwidth - this.radius * 2) + this.radius;
      this.y = Math.random() * (this.bgheight - this.radius * 2) + this.radius;
      this.dx = Math.random() - 0.5;
      this.dy = Math.random() - 0.5;
      this.clickX = 0;
      this.clickY = 0;
      this.update();
    } else {
      score.gameover();
    }
  }
}