const dice = document.querySelector(".dice");
const countdownTimer = document.querySelector(".countdownTimer");
const countdownMessage = document.querySelector(".countdownMessage");
const outputMessage = document.querySelector(".outputMessage");
const selectedChoiceVar = document.querySelector(".selectedChoiceVar");
const scoreVar = document.querySelector(".scoreVar");
const buttonOne = document.querySelector(".buttonOne");
const buttonTwo = document.querySelector(".buttonTwo");
const buttonThree = document.querySelector(".buttonThree");
const buttonFour = document.querySelector(".buttonFour");
const buttonFive = document.querySelector(".buttonFive");
const outputDiv = document.querySelector(".outputDiv");

const buttonSix = document.querySelector(".buttonSix");
//const body = document.querySelectorAll("body");

//const start = document.querySelector(".start");
//const stop = document.querySelector(".stop");

let imagesArr = [];
let selectedVariable = 0;
let score = 0;

// let image1 = loader.loadImage();
// let image2 = loader.loadImage();
// let image3 = loader.loadImage("./images/3.png");
// let image4 = loader.loadImage("./images/4.png");
// let image5 = loader.loadImage("./images/5.png");
// let image6 = loader.loadImage("./images/6.png");

function createImage(src, title) {
  var img = new Image();
  img.src = src;
  img.alt = title;
  img.title = title;
  return img;
}

imagesArr.push(createImage("./images/1.png", "first image"));
imagesArr.push(createImage("./images/2.png", "first image"));
imagesArr.push(createImage("./images/3.png", "first image"));
imagesArr.push(createImage("./images/4.png", "first image"));
imagesArr.push(createImage("./images/5.png", "first image"));
imagesArr.push(createImage("./images/6.png", "first image"));

let seconds = 5;
const a = setInterval(function () {
  startTime();
}, 1000);

function startTime() {
  if (seconds === 1) {
    clearInterval(a);
    countdownMessage.innerHTML = "";
    dice.appendChild(imagesArr[0]);
    game();
  } else {
    seconds--;
  }
  countdownTimer.innerHTML = seconds;
}

let sec = 5;
let b;

function game() {
  outputMessage.innerHTML = "";
  outputMessage.style.backgroundColor = "none";
  outputMessage.style.padding = "";
  b = setInterval(() => {
    startGame();
  }, 1000);
}

function startGame() {
  if (sec === 0) {
    clearInterval(b);
    countdownMessage.innerHTML = "";
    diceRoll();
  } else {
    sec--;
  }
  countdownMessage.innerHTML = `You have ${sec} seconds to Guess.`;
  selectNumber();
}

function diceRoll() {
  dice.classList.remove("animated", "wobble", "shake");
  setTimeout(function () {
    dice.classList.add("animated", "wobble", "shake");
  }, 100);
  let num = Math.floor(Math.random() * 6);
  function printImage() {
    dice.innerHTML = "";
    dice.appendChild(imagesArr[num]);
  }
  if (num >= 0 && num < 6) {
    printImage();
  }

  match(num);
}

function selectNumber() {
  buttonOne.addEventListener("click", function () {
    selectedVariable = 1;
    selectedChoiceVar.innerHTML = selectedVariable;
    buttonOne.style.backgroundColor = "#FFA701";
    buttonTwo.disabled = true;
    buttonThree.disabled = true;
    buttonFour.disabled = true;
    buttonFive.disabled = true;
    buttonSix.disabled = true;
  });
  buttonTwo.addEventListener("click", function () {
    selectedVariable = 2;
    selectedChoiceVar.innerHTML = selectedVariable;
    buttonTwo.style.backgroundColor = "#FFA701";
    buttonOne.disabled = true;
    buttonThree.disabled = true;
    buttonFour.disabled = true;
    buttonFive.disabled = true;
    buttonSix.disabled = true;
  });
  buttonThree.addEventListener("click", function () {
    selectedVariable = 3;
    selectedChoiceVar.innerHTML = selectedVariable;
    buttonThree.style.backgroundColor = "#FFA701";
    buttonTwo.disabled = true;
    buttonOne.disabled = true;
    buttonFour.disabled = true;
    buttonFive.disabled = true;
    buttonSix.disabled = true;
  });
  buttonFour.addEventListener("click", function () {
    selectedVariable = 4;
    selectedChoiceVar.innerHTML = selectedVariable;
    buttonFour.style.backgroundColor = "#FFA701";
    buttonTwo.disabled = true;
    buttonThree.disabled = true;
    buttonOne.disabled = true;
    buttonFive.disabled = true;
    buttonSix.disabled = true;
  });
  buttonFive.addEventListener("click", function () {
    selectedVariable = 5;
    selectedChoiceVar.innerHTML = selectedVariable;
    buttonFive.style.backgroundColor = "#FFA701";
    buttonTwo.disabled = true;
    buttonThree.disabled = true;
    buttonFour.disabled = true;
    buttonOne.disabled = true;
    buttonSix.disabled = true;
  });
  buttonSix.addEventListener("click", function () {
    selectedVariable = 6;
    selectedChoiceVar.innerHTML = selectedVariable;
    buttonSix.style.backgroundColor = "#FFA701";
    buttonOne.disabled = true;
    buttonTwo.disabled = true;
    buttonThree.disabled = true;
    buttonFour.disabled = true;
    buttonFive.disabled = true;
  });
}

function match(num) {
  if (selectedVariable === 1 && num === 0) {
    buttonOne.style.backgroundColor = "white";
    check();
  } else if (selectedVariable === 2 && num === 1) {
    buttonTwo.style.backgroundColor = "white";
    check();
  } else if (selectedVariable === 3 && num === 2) {
    buttonThree.style.backgroundColor = "white";
    check();
  } else if (selectedVariable === 4 && num === 3) {
    buttonFour.style.backgroundColor = "white";
    check();
  } else if (selectedVariable === 5 && num === 4) {
    buttonFive.style.backgroundColor = "white";
    check();
  } else if (selectedVariable === 6 && num === 5) {
    buttonSix.style.backgroundColor = "white";
    check();
  } else {
    check2();
  }
}

function check() {
  countdownMessage.innerHTML = " ";

  outputMessage.innerHTML = "Your Guess was RIGHT!";
  outputDiv.style.backgroundColor = "#45BB27";
  outputMessage.style.padding = "15px";
  score = score + 10;
  scoreVar.innerHTML = score;
  selectedVariable = 0;
  selectedChoiceVar.innerHTML = selectedVariable;
  buttonOne.disabled = false;
  buttonTwo.disabled = false;
  buttonThree.disabled = false;
  buttonFour.disabled = false;
  buttonFive.disabled = false;
  buttonSix.disabled = false;

  setTimeout(() => {
    sec = 6;
    game();
  }, 1000);
}

function check2() {
  countdownMessage.innerHTML = " ";
  outputMessage.innerHTML = "Your Guess was WRONG!";
  outputDiv.style.backgroundColor = "#EA4E4E";
  //outputMessage.style.padding = "15px";
  scoreVar.innerHTML = score;
  selectedVariable = 0;
  selectedChoiceVar.innerHTML = selectedVariable;
  buttonOne.style.backgroundColor = "white";
  buttonTwo.style.backgroundColor = "white";
  buttonThree.style.backgroundColor = "white";
  buttonFour.style.backgroundColor = "white";
  buttonFive.style.backgroundColor = "white";
  buttonSix.style.backgroundColor = "white";
  buttonOne.disabled = false;
  buttonTwo.disabled = false;
  buttonThree.disabled = false;
  buttonFour.disabled = false;
  buttonFive.disabled = false;
  buttonSix.disabled = false;
  setTimeout(() => {
    sec = 6;
    game();
  }, 1000);
}

// stop.addEventListener("click", function () {
//   selectedVariable = 0;
//   selectedChoiceVar.innerHTML = selectedVariable;
//   countdownMessage.innerHTML = "";
//   outputMessage.innerHTML = "";
//   outputMessage.style.backgroundColor = "none";
//   outputMessage.style.padding = "";
//   one.disabled = true;
//   two.disabled = true;
//   three.disabled = true;
//   four.disabled = true;
//   five.disabled = true;
//   six.disabled = true;
//   clearInterval(a);
//   clearInterval(b);
// });

// start.addEventListener("click", function () {
//   location.reload();
// });
