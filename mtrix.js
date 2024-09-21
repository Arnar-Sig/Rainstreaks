  /** @type {CanvasRenderingContext2D} */
const ctx = document.getElementById("canvas").getContext("2d");
let canvasHeight = window.innerHeight;
let canvasWidth = window.innerWidth;
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "<", ">", "?", "/", "|", "[", "]", "{", "}", "^", "`", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let rainstreaks = [];
let stopwatch = Date.now();

class Rainstreak { 
  x;
  y;
  lastAction;
  sequence = [];
  sequenceLength;
  currentIndex = 0;
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.lastAction = Date.now();
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
    this.lastAction = Date.now();
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
    if (Date.now() - rs.lastAction > 1000){
      rs.draw();
    }
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
