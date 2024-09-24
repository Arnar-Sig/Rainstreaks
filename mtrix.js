// import { Rainstreak } from "./Rainstreak.js";

/** @type {CanvasRenderingContext2D} */
const ctx = document.getElementById("canvas").getContext("2d");
let canvasHeight = window.innerHeight;
let canvasWidth = window.innerWidth;
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "<", ">", "?", "/", "|", "[", "]", "{", "}", "^", "`", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let rainstreaks = [];
let fontSize = 25;
let lastPaintCanvas = Date.now();


function init() {
  canvas.height = canvasHeight;
  canvas.width = canvasWidth;
  window.requestAnimationFrame(paintCanvas);
}

function paintCanvas(currentTime) {
  // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  // console.log(Math.floor(Math.random() * 100));
  if (Math.floor(Math.random() * 100) > 85) {
    createNewRainstreak();
  }
  if (Date.now() - lastPaintCanvas > 10){
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
  let rs = new Rainstreak(Math.floor(getRandomBetweenTwoNumbers(0, canvasWidth)), Math.floor(getRandomBetweenTwoNumbers(0, 150))); 

  rainstreaks.push(rs);
}

function getRandomBetweenTwoNumbers(min, max) {
  return Math.random() * (max - min) + min;
}

init();

createNewRainstreak();
