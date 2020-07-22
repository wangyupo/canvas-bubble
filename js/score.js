export default class score {
  constructor() {
    this.canvas = document.getElementById("score");
    this.ctx = this.canvas.getContext("2d");

    this.score = 0;

    this.ctx.font = "30px serif";
    this.ctx.fillText(`分数：${this.score}`, 10, 50);
  }

  update(over) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.font = "30px serif";
    if (!over) {
      this.score++;
    } else {
      this.score = 0;
    }
    this.ctx.fillText(`分数：${this.score}`, 10, 50);
  }

  gameover() {
    this.update(true);
  }
}