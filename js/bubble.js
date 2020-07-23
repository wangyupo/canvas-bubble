import SCORE from "./score.js";
let score = new SCORE();

export default class bubble {
  constructor(ctx, radius, bgwidth, bgheight, target) {
    this.ctx = ctx;
    this.radius = radius;
    this.bgwidth = bgwidth;
    this.bgheight = bgheight;
    this.target = target;
    this.targetX = 0;
    this.targetY = 0;
    this.speed = 0.5;
    this.reset();

    document.addEventListener('click', event => {
      this.clickX = event.x;
      this.clickY = event.y;
    });
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

  reset(resetLevel) {
    this.x = Math.random() * (this.bgwidth - this.radius * 2) + this.radius;
    this.y = Math.random() * (this.bgheight - this.radius * 2) + this.radius;
    this.dx = Math.random() - this.speed;
    this.dy = Math.random() - this.speed;
    this.clickX = 0;
    this.clickY = 0;
    if (resetLevel) {
      this.speed = 0.5;
    }
    this.draw();
  }

  levelUp() {
    this.speed -= 0.5;
  }

  judge() {
    if (!this.clickX || !this.targetX) return;
    //两点距离小于半径即为点中
    let dep = Math.sqrt(Math.pow((this.clickX - this.targetX), 2) + Math.pow((this.clickY - this.targetY), 2));
    if (dep < this.radius) {
      score.update();
      this.levelUp();
      this.reset();
    } else {
      score.gameover();
      this.reset(true);
    }
  }
}