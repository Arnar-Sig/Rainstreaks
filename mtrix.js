  /** @type {CanvasRenderingContext2D} */
const ctx = document.getElementById("canvas").getContext("2d");
let canvasHeight = window.innerHeight;
let canvasWidth = window.innerWidth;
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "<", ">", "?", "/", "|", "[", "]", "{", "}", "^", "`", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let rainstreaks = [];
let fontSize = 40;

class Rainstreak { 
  x;
  y;
  originalY;
  lastAction;
  sequence = [];
  sequenceLength;
  currentIndex = 0;
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
    if (this.currentIndex >= this.sequenceLength) {
      rainstreaks.pop(this);
      return;
    }
    let currentY = this.y;
    for (let i = this.currentIndex ; i > 0; i--) {
      ctx.fillText(this.sequence[i], this.x, currentY);
      ctx.fillStyle = "rgb(0, 143, 17, " + (i / this.sequenceLength) + ")";
      currentY -= fontSize;
    }
    this.currentIndex++;
    this.lastAction = Date.now();

    // // the simple one character version
    // ctx.fillText(this.sequence[this.currentIndex], this.x, this.y);
    // this.currentIndex++;
    // ctx.font = fontSize + "px serif";
    // // ctx.fillStyle = "#008f11";
    // ctx.fillStyle = "rgb(0, 143, 17, 1)";
    // this.y += 40;
    // this.lastAction = Date.now();
  }
}

// window.addEventListener('resize', function() {
  // canvas.height = window.innerHeight;
  // canvas.width = window.innerWidth;
// });

function init() {
  canvas.height = canvasHeight;
  canvas.width = canvasWidth;
  window.requestAnimationFrame(paintCanvas);
}

function paintCanvas(currentTime) {
  // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  rainstreaks.forEach(rainstreak => {
    if (Date.now() - rainstreak.lastAction > 100){
      rainstreak.draw();
    }
  });
  window.requestAnimationFrame(paintCanvas);
}


function createNewRainstreak() {
  let coords = [Math.floor(getRandomBetweenTwoNumbers(0,800)), Math.floor(getRandomBetweenTwoNumbers(0, 800))];
  console.log(coords);
  let rs = new Rainstreak(Math.min(coords[0], coords[1]), Math.max(coords[0], coords[1])); 
  rainstreaks.push(rs);
}

function getRandomBetweenTwoNumbers(min, max) {
  return Math.random() * (max - min) + min;
}

createNewRainstreak();
createNewRainstreak();
createNewRainstreak();
createNewRainstreak();

init();


// console.log(rs.sequenceLength);
// console.log(rs.sequence);
