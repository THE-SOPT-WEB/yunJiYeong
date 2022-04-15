import pic1 from "./assets/김규민.jpeg";
import pic2 from "./assets/전희선.jpeg";
import pic3 from "./assets/서혜은.jpg";
import pic4 from "./assets/황주희.jpeg";
import pic5 from "./assets/백지연.png";

const $ = (selector) => document.querySelector(selector);

let currentStep = 0;

const quizList = [
  {
    src: pic1,
    answer: "김규민",
  },
  {
    src: pic2,
    answer: "전희선",
  },
  {
    src: pic3,
    answer: "서혜은",
  },
  {
    src: pic4,
    answer: "황주희",
  },
  {
    src: pic5,
    answer: "백지연",
  },
];

const score = $(".scoreBoard__score");
const answer = $("ul.answer__list");
const image = $(".imageBoard > img");

window.onload = () => {
  gameManager({
    score: $(".scoreBoard__score"),
    answer: $("ul.answer__list"),
    image: $(".imageBoard > img"),
  });
};

function gameManager(gameInfo) {
  initGame(gameInfo);
  attachEvent(gameInfo);
}

function initGame({ score, answer, image }) {
  currentStep = 0;
  score.innerText = 0;
  image.src = quizList[currentStep].src;
}

function progressGame({ score, answer, image }) {
  currentStep += 1;
  if (currentStep == quizList.length) {
    endGame();
  } else {
    score.innerText = Number(score.innerText) + 1;
    image.src = quizList[currentStep].src;
  }
}

function attachEvent({ score, answer, image }) {
  answer.addEventListener("click", (e) => {
    if (e.target instanceof HTMLElement) {
      const currentAnswer = e.target.innerText;
      const realAnswer = quizList[currentStep].answer;
      checkAnswer(currentAnswer, realAnswer, score, answer, image);
    }
  });
}

function checkAnswer(currentAnswer, realAnswer, score, answer, image) {
  if (currentAnswer === realAnswer) {
    progressGame({ score, answer, image });
  } else {
    showModal();
  }
}

function showModal() {
  const modal = $(".modal");
  const modalContent = $(".modal__content");
  modal.classList.remove("hide");
  setTimeout(() => {
    modal.classList.add("hide");
  }, 1500);
  modalContent.textContent = "눈을 뜨라고👁👃🏻👁";
}

function endGame() {
  const modal = $(".modal");
  const modalContent = $(".modal__content");
  modal.classList.remove("hide");
  modalContent.textContent = "한판 더👍";
  continueGame();
}

function continueGame() {
  const modal = $(".modal");
  modal.addEventListener("click", (e) => {
    modal.classList.add("hide");
    initGame({ score, answer, image });
  });
}

function retryGame() {
  const retyrBtn = $(".buttonList__shuffle");
  retyrBtn.addEventListener("click", (e) => {
    initGame({ score, answer, image });
  });
}

retryGame();
