class Rainstreak {
  x;
  y;
  lastAction;
  sequence = [];
  sequenceLength;
  currentIndex = 0;
  currentAlphaLevel = 0.5;
  hasCompleted = false;
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.originalY = y;
    this.lastAction = Date.now();

    const minCeiled = Math.ceil(20);
    const maxFloored = Math.floor(40);
    this.sequenceLength = Math.floor(
      Math.random() * (maxFloored - minCeiled) + minCeiled
    );

    for (let i = 0; i < this.sequenceLength; i++) {
      let num = Math.floor(Math.random() * (alphabet.length - 0) + 0);
      this.sequence.push(alphabet[num]);
    }
  }
  draw() {
    let currentY = this.y;
    
    if (Date.now() - this.lastAction > 100) {
      this.currentIndex++;
      this.lastAction = Date.now();
      if (this.currentIndex > this.sequenceLength) {
        this.currentAlphaLevel -= 0.25;
      }
    }

    for (let i = 0; i < this.currentIndex + 1; i++) {
      if (i > this.sequenceLength - 1) {
        break;
      }
      ctx.font = fontSize + "px serif";
      ctx.fillText(this.sequence[i], this.x, currentY);
      ctx.fillStyle = "rgb(0, 143, 17, " + (i * 0.03 + this.currentAlphaLevel) + ")";
      currentY += fontSize;
    }
  }
}
