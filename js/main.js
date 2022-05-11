//maybe add a function here that makes all of these variables

let box1 = document.querySelectorAll(".little1");
let box2 = document.querySelectorAll(".little2");
let box3 = document.querySelectorAll(".little3");
let box4 = document.querySelectorAll(".little4");
let box5 = document.querySelectorAll(".little5");
let box6 = document.querySelectorAll(".little6");
let box7 = document.querySelectorAll(".little7");
let box8 = document.querySelectorAll(".little8");
let box9 = document.querySelectorAll(".little9");
let bigBox = document.querySelectorAll(".square");
let big1 = document.querySelector(".one");
let big2 = document.querySelector(".two");
let big3 = document.querySelector(".three");
let big4 = document.querySelector(".four");
let big5 = document.querySelector(".five");
let big6 = document.querySelector(".six");
let big7 = document.querySelector(".seven");
let big8 = document.querySelector(".eight");
let big9 = document.querySelector(".nine");
let container = document.querySelector(".container");
let cover = document.querySelectorAll(".cover");
let nextTurn = document.querySelector("h2");
let playerX = true;
let pieceCount = 0;
let winner;
let availableBoards;

class Board {
  constructor(box, bigBox) {
    this.box = box;
    this.one = this.box[0];
    this.two = this.box[1];
    this.three = this.box[2];
    this.four = this.box[3];
    this.five = this.box[4];
    this.six = this.box[5];
    this.seven = this.box[6];
    this.eight = this.box[7];
    this.nine = this.box[8];
    this.bigBox = bigBox;
  }
  addPiece() {
    for (let i = 0; i < this.box.length; i++) {
      // check for player x and o
      this.box[i].addEventListener("click", () => {
        document.querySelector("h1").innerText = i;
        if (playerX && this.box[i].innerText === "") {
          this.box[i].innerText = "X";
          playerX = false;
          nextTurn.innerText = `O's Turn`;
          this.checkWin();
        } else if (!playerX && this.box[i].innerText === "") {
          this.box[i].innerText = "O";
          playerX = true;
          nextTurn.innerText = `X's Turn`;
          this.checkWin();
        }
      });
    }
  }

  checkWin() {
    if (
      this.one.innerText &&
      this.one.innerText === this.two.innerText &&
      this.one.innerText === this.three.innerText
    ) {
      winner = this.one.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("smallGameOver");
    } else if (
      this.four.innerText &&
      this.four.innerText === this.five.innerText &&
      this.four.innerText === this.six.innerText
    ) {
      winner = this.four.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("smallGameOver");
    } else if (
      this.seven.innerText &&
      this.seven.innerText === this.eight.innerText &&
      this.seven.innerText === this.nine.innerText
    ) {
      winner = this.seven.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("smallGameOver");
    } else if (
      this.one.innerText &&
      this.one.innerText === this.four.innerText &&
      this.one.innerText === this.seven.innerText
    ) {
      winner = this.one.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("smallGameOver");
    } else if (
      this.two.innerText &&
      this.two.innerText === this.five.innerText &&
      this.two.innerText === this.eight.innerText
    ) {
      winner = this.two.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("smallGameOver");
    } else if (
      this.three.innerText &&
      this.three.innerText === this.six.innerText &&
      this.three.innerText === this.nine.innerText
    ) {
      winner = this.three.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("smallGameOver");
    } else if (
      this.one.innerText &&
      this.one.innerText === this.five.innerText &&
      this.one.innerText === this.nine.innerText
    ) {
      winner = this.one.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("smallGameOver");
    } else if (
      this.three.innerText &&
      this.three.innerText === this.five.innerText &&
      this.three.innerText === this.seven.innerText
    ) {
      winner = this.three.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("smallGameOver");
    } else {
      if (pieceCount >= 9) {
        checkForDraw();
      }
    }
  }
}

class BigBoard extends Board {
  constructor(box, bigBox) {
    super(box, bigBox);
    this.one = big1;
    this.two = big2;
    this.three = big3;
    this.four = big4;
    this.five = big5;
    this.six = big6;
    this.seven = big7;
    this.eight = big8;
    this.nine = big9;
    this.boards = [
      this.one,
      this.two,
      this.three,
      this.four,
      this.five,
      this.six,
      this.seven,
      this.eight,
      this.nine,
    ];
  }
  checkWin() {
    this.showNextSquare();
    if (
      this.one.innerText &&
      this.one.innerHTML === this.two.innerHTML &&
      this.one.innerHTML === this.three.innerHTML
    ) {
      winner = this.one.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("bigGameOver");
      for (let i = 0; i < this.boards.length; i++) {
        this.boards[i].firstElementChild.classList.remove("coverShow");
      }
    } else if (
      this.four.innerText &&
      this.four.innerHTML === this.five.innerHTML &&
      this.four.innerHTML === this.six.innerHTML
    ) {
      winner = this.four.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("bigGameOver");
      for (let i = 0; i < this.boards.length; i++) {
        this.boards[i].firstElementChild.classList.remove("coverShow");
      }
    } else if (
      this.seven.innerText &&
      this.seven.innerHTML === this.eight.innerHTML &&
      this.seven.innerHTML === this.nine.innerHTML
    ) {
      winner = this.seven.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("bigGameOver");
      for (let i = 0; i < this.boards.length; i++) {
        this.boards[i].firstElementChild.classList.remove("coverShow");
      }
    } else if (
      this.one.innerText &&
      this.one.innerHTML === this.four.innerHTML &&
      this.one.innerHTML === this.seven.innerHTML
    ) {
      winner = this.one.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("bigGameOver");
      for (let i = 0; i < this.boards.length; i++) {
        this.boards[i].firstElementChild.classList.remove("coverShow");
      }
    } else if (
      this.two.innerText &&
      this.two.innerHTML === this.five.innerHTML &&
      this.two.innerHTML === this.eight.innerHTML
    ) {
      winner = this.two.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("bigGameOver");
      for (let i = 0; i < this.boards.length; i++) {
        this.boards[i].firstElementChild.classList.remove("coverShow");
      }
    } else if (
      this.three.innerText &&
      this.three.innerHTML === this.six.innerHTML &&
      this.three.innerHTML === this.nine.innerHTML
    ) {
      winner = this.three.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("bigGameOver");
      for (let i = 0; i < this.boards.length; i++) {
        this.boards[i].firstElementChild.classList.remove("coverShow");
      }
    } else if (
      this.one.innerText &&
      this.one.innerHTML === this.five.innerHTML &&
      this.one.innerHTML === this.nine.innerHTML
    ) {
      winner = this.one.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("bigGameOver");
      for (let i = 0; i < this.boards.length; i++) {
        this.boards[i].firstElementChild.classList.remove("coverShow");
      }
    } else if (
      this.three.innerText &&
      this.three.innerHTML === this.five.innerHTML &&
      this.three.innerHTML === this.seven.innerHTML
    ) {
      winner = this.three.innerText;
      this.bigBox.innerText = winner;
      this.bigBox.classList.add("bigGameOver");
      for (let i = 0; i < this.boards.length; i++) {
        this.boards[i].firstElementChild.classList.remove("coverShow");
      }
    } else {
      if (pieceCount >= 9) {
        checkForDraw();
      }
    }
  }
  clearAllCover() {
    availableBoards = this.boards.filter((x) => x.firstElementChild);
    for (let i = 0; i < availableBoards.length; i++) {
      availableBoards[i].firstElementChild.classList.remove("coverShow");
    }
  }
  showNextSquare() {
    if (
      !this.boards[document.querySelector("h1").innerText].firstElementChild
    ) {
      this.clearAllCover();
    } else {
      for (let i = 0; i < this.boards.length; i++) {
        if (this.boards[i].firstElementChild) {
          for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].firstElementChild) {
              this.boards[i].firstElementChild.classList.add("coverShow");
            }
          }
          this.boards[
            document.querySelector("h1").innerText
          ].firstElementChild.classList.remove("coverShow");
        }
      }
    }
  }
}

const board1 = new Board(box1, big1);
const board2 = new Board(box2, big2);
const board3 = new Board(box3, big3);
const board4 = new Board(box4, big4);
const board5 = new Board(box5, big5);
const board6 = new Board(box6, big6);
const board7 = new Board(box7, big7);
const board8 = new Board(box8, big8);
const board9 = new Board(box9, big9);
const bigOne = new BigBoard(bigBox, container);
let boxes = [
  board1,
  board2,
  board3,
  board4,
  board5,
  board6,
  board7,
  board8,
  board9,
];

boxes.map((x) => x.addPiece());

//win condition on entire board

//force next player to play in a certain square given which square the previous player played in

//edge case of if that square is complete

//this is how i could highlight what board the next player must play on/show when a player won a small board on te big board
// document.querySelector(".littleOne").addEventListener("click", changeColor);

// function changeColor() {
//   document.querySelector(".two").innerText = "O";
//   document.querySelector(".two").classList.add("smallGameOver");
// }
document
  .querySelector(".container")
  .addEventListener("click", () => bigOne.checkWin());
