  /** @type {CanvasRenderingContext2D} */
const ctx = document.getElementById("canvas").getContext("2d");
let canvasHeight = window.innerHeight;
let canvasWidth = window.innerWidth;
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "<", ">", "?", "/", "|", "[", "]", "{", "}", "^", "`", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let rainstreaks = [];
let fontSize = 40;
let lastPaintCanvas = Date.now();

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
    const minCeiled = Math.ceil(5);
    const maxFloored = Math.floor(30);
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
      ctx.fontsize = fontSize + "px serif";
      ctx.fillText(this.sequence[i], this.x, currentY);
      if (i == this.currentIndex) {
        ctx.fillStyle = "rgb(255, 255, 255, 1";
      }
      ctx.fillStyle = "rgb(0, 143, 17, " + (i*0.05 + this.currentAlphaLevel) + ")";
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

function init() {
  canvas.height = canvasHeight;
  canvas.width = canvasWidth;
  window.requestAnimationFrame(paintCanvas);
}

function paintCanvas(currentTime) {
  // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  // console.log(Math.floor(Math.random() * 100));
  if (Math.floor(Math.random() * 100) > 80) {
    createNewRainstreak();
  }
  if (Date.now() - lastPaintCanvas > 100){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    rainstreaks.forEach(rainstreak => {
        rainstreak.draw();
    });
    lastPaintCanvas = Date.now();
  }

  window.requestAnimationFrame(paintCanvas);
}


function createNewRainstreak() {
  // let coords = [Math.floor(getRandomBetweenTwoNumbers(0,800)), Math.floor(getRandomBetweenTwoNumbers(0, 800))]; 
  // let rs = new Rainstreak(Math.min(coords[0], coords[1]), Math.max(coords[0], coords[1])); 
  let rs = new Rainstreak(Math.floor(getRandomBetweenTwoNumbers(0, 800)), Math.floor(getRandomBetweenTwoNumbers(0, 150))); 

  rainstreaks.push(rs);
}

function getRandomBetweenTwoNumbers(min, max) {
  return Math.random() * (max - min) + min;
}

init();

createNewRainstreak();
