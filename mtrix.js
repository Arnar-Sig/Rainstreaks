  /** @type {CanvasRenderingContext2D} */
const ctx = document.getElementById("canvas").getContext("2d");
let speed = 50;
let x = 0;
let lastTime = performance.now();
let canvasHeight = window.innerHeight;
let canvasWidth = window.innerWidth;
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "<", ">", "?", "/", "|", "[", "]", "{", "}", "^", "`", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let rainstreaks = [];

class Rainstreak { 
  x;
  y;
  sequence = [];
  sequenceLength;
  currentIndex = 0;
  constructor(x, y){
    this.x = x;
    this.y = y;
    // create sequence
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
      return;
    }
    ctx.fillText(this.sequence[this.currentIndex], this.x, this.y);
    this.currentIndex++;
    ctx.font = "40px serif";
    ctx.fillStyle = "green";
    this.y += 40;
  }
}

// window.addEventListener('resize', function() {
  // canvas.height = window.innerHeight;
  // canvas.width = window.innerWidth;
// });

function init() {
  canvas.height = canvasHeight;
  canvas.width = canvasWidth;
  window.requestAnimationFrame(draw);
}

function draw(currentTime) {
  // updateGrid(currentTime);
  rainstreaks.forEach(rs => {
    rs.draw();
  });
  window.requestAnimationFrame(draw);
}

// function updateGrid(currentTime) {
//   const timeDifference = (currentTime - lastTime) / 1000;
//   x += speed * timeDifference;

//   ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//   ctx.font = "40px serif";
//   ctx.fillStyle = "green";
//   ctx.fillText("a", 10, x);
//   lastTime = currentTime;
// }

let rs = new Rainstreak(5, 5); 
rainstreaks.push(rs);
init();


console.log(rs.sequenceLength);
console.log(rs.sequence);