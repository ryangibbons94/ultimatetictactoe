let box1 = document.querySelectorAll(".little1");
let box2 = document.querySelectorAll(".little2");
let box3 = document.querySelectorAll(".little3");
let box4 = document.querySelectorAll(".little4");
let box5 = document.querySelectorAll(".little5");
let box6 = document.querySelectorAll(".little6");
let box7 = document.querySelectorAll(".little7");
let box8 = document.querySelectorAll(".little8");
let box9 = document.querySelectorAll(".little9");
let big1 = document.querySelectorAll(".one");
let big2 = document.querySelectorAll(".two");
let big3 = document.querySelectorAll(".three");
let big4 = document.querySelectorAll(".four");
let big5 = document.querySelectorAll(".five");
let big6 = document.querySelectorAll(".six");
let big7 = document.querySelectorAll(".seven");
let big8 = document.querySelectorAll(".eight");
let big9 = document.querySelectorAll(".nine");
let playerX = true;
let pieceCount = 0;
let winner;

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
        if (playerX && this.box[i].innerText === "") {
          this.box[i].innerText = "X";
          playerX = false;
          this.checkWin();
        } else if (!playerX && this.box[i].innerText === "") {
          this.box[i].innerText = "O";
          playerX = true;
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
      this.bigBox[0].innerText = winner;
      this.bigBox[0].classList.add("smallGameOver");
    } else if (
      this.four.innerText &&
      this.four.innerText === this.five.innerText &&
      this.four.innerText === this.six.innerText
    ) {
      winner = this.four.innerText;
      this.bigBox[0].innerText = winner;
      this.bigBox[0].classList.add("smallGameOver");
    } else if (
      this.seven.innerText &&
      this.seven.innerText === this.eight.innerText &&
      this.seven.innerText === this.nine.innerText
    ) {
      winner = this.seven.innerText;
      this.bigBox[0].innerText = winner;
      this.bigBox[0].classList.add("smallGameOver");
    } else if (
      this.one.innerText &&
      this.one.innerText === this.four.innerText &&
      this.one.innerText === this.seven.innerText
    ) {
      winner = this.one.innerText;
      this.bigBox[0].innerText = winner;
      this.bigBox[0].classList.add("smallGameOver");
    } else if (
      this.two.innerText &&
      this.two.innerText === this.five.innerText &&
      this.two.innerText === this.eight.innerText
    ) {
      winner = this.two.innerText;
      this.bigBox[0].innerText = winner;
      this.bigBox[0].classList.add("smallGameOver");
    } else if (
      this.three.innerText &&
      this.three.innerText === this.six.innerText &&
      this.three.innerText === this.nine.innerText
    ) {
      winner = this.three.innerText;
      this.bigBox[0].innerText = winner;
      this.bigBox[0].classList.add("smallGameOver");
    } else if (
      this.one.innerText &&
      this.one.innerText === this.five.innerText &&
      this.one.innerText === this.nine.innerText
    ) {
      winner = this.one.innerText;
      this.bigBox[0].innerText = winner;
      this.bigBox[0].classList.add("smallGameOver");
    } else if (
      this.three.innerText &&
      this.three.innerText === this.five.innerText &&
      this.three.innerText === this.seven.innerText
    ) {
      winner = this.three.innerText;
      this.bigBox[0].innerText = winner;
      this.bigBox[0].classList.add("smallGameOver");
    } else {
      if (pieceCount >= 9) {
        checkForDraw();
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
