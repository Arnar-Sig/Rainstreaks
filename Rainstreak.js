class Rainstreak { 
  x;
  y;
  lastAction;
  sequence = [];
  sequenceLength;
  currentIndex = 0;
  currentAlphaLevel = 0.5;
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.originalY = y;
    this.lastAction = Date.now();
    // create character sequence of Rainstreak
    const minCeiled = Math.ceil(20);
    const maxFloored = Math.floor(40);
    this.sequenceLength = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    for (let i = 0; i < this.sequenceLength; i++) {
      let num = Math.floor(Math.random() * (alphabet.length - 0) + 0);
      this.sequence.push(alphabet[num]);
    }
  }
  draw(){
    let currentY = this.y;
    if (Date.now() - this.lastAction > 100) {
      
      this.currentIndex++;
      this.lastAction = Date.now();
      // this.y += fontSize;
      if (this.currentIndex > this.sequenceLength) {
        this.currentAlphaLevel -= 0.25;
      }

    }
    for(let i = 0; i < this.currentIndex; i++){
      if (i > this.sequenceLength - 1) {
        break;
      }
      ctx.font = fontSize + "px serif";
      ctx.fillText(this.sequence[i], this.x, currentY);
      if (i == this.currentIndex) {
        ctx.fillStyle = "rgb(255, 255, 255, 1";
      }
      ctx.fillStyle = "rgb(0, 143, 17, " + (i*0.03 + this.currentAlphaLevel) + ")";
      currentY += fontSize;
    }



    // if (this.currentIndex >= this.sequenceLength + (this.sequenceLength - 1)) {
    //   rainstreaks.pop(this);
    //   return;
    // }
    // if (Date.now() - this.lastAction > 100) {
    //   this.currentIndex++;
    //   this.lastAction = Date.now();
    //   this.y += fontSize;
    //   if (this.currentIndex > this.sequenceLength) {
    //     this.currentAlphaLevel -= 0.05;
    //   }
    // }
    // for(let i = 0; i < this.currentIndex; i++){
    //   if (i > this.sequenceLength) {
    //     break;
    //   }
    //   ctx.fillText(this.sequence[i], this.x, this.y);
    //   ctx.fillStyle = "rgb(0, 143, 17, " + 1 + ")";
      
    // }

  }
}
