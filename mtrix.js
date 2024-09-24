/** @type {CanvasRenderingContext2D} */
const ctx = document.getElementById("canvas").getContext("2d");
let canvasHeight = window.innerHeight;
let canvasWidth = window.innerWidth;
// let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "<", ">", "?", "/", "|", "[", "]", "{", "}", "^", "`", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let alphabet = [":", ",", "=", "\"", "*", "+", "-", "|", "~", "(", 
  "[", ")", "&", "!", "]", "{", "}", "¢", "£", "¤", "¥", "_", "¦" , 
  "ｦ", "ｱ", "ｳ", "ｴ", "ｵ", "ｶ", "ｷ", "ｹ", "ｺ", "ｻ", "ｼ", "ｽ", "ｾ", "ｿ" , 
  "ﾀ", "ﾂ", "ﾃ", "ﾅ", "ﾆ", "ﾇ", "ﾈ", "ﾊ", "ﾋ", "ﾎ", "ﾏ", "ﾐ", "ﾑ", "ﾒ", "ﾓ", "ﾔ", "ﾕ", "ﾗ", "ﾘ", "ﾜ"] 

let rainstreaks = [];
let fontSize = 25;
let lastPaintCanvas = Date.now();
let animationSpeed = 50; // milliseconds between repainting

function init() {
  canvas.height = canvasHeight;
  canvas.width = canvasWidth;
  window.requestAnimationFrame(paintCanvas);
}

function paintCanvas(currentTime) {
  if (Math.floor(Math.random() * 100) > 75) {
    createNewRainstreak();
  }
  if (Date.now() - lastPaintCanvas > animationSpeed) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    for (let i = 0; i < rainstreaks.length; i++) {
      if (rainstreaks[i].currentIndex > 2 * rainstreaks[i].sequenceLength) {
        rainstreaks.splice(i, 1);
      }
      rainstreaks[i].draw();
      lastPaintCanvas = Date.now();
    }
  }
  window.requestAnimationFrame(paintCanvas);
}


function createNewRainstreak() {
  let rs = new Rainstreak(Math.floor(getRandomBetweenTwoNumbers(0, canvasWidth)), Math.floor(getRandomBetweenTwoNumbers(0, 150))); 
  rainstreaks.push(rs);
}

function getRandomBetweenTwoNumbers(min, max) {
  return Math.random() * (max - min) + min;
}

init();
