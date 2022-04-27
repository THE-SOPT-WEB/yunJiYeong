const addList = {};
let amountPrice = 0;
const $ = (selector) => document.querySelector(selector);
const amountText = document.querySelector(".amount__price");

window.onload = () => {
  chooseMenu();
  allCancel();
  successOrder();
};

const priceList = {};
const editedPrice = document.querySelectorAll(".burger__card__detail__price");
editedPrice.forEach((price) => {
  const removedComma = price.innerText.slice(0).replace(/\D/g, "");
  priceList[price.previousElementSibling.innerText] = Number(removedComma);
});

// let priceList = {
//   "리코타 치킨 버거": 6300,
//   "더블 빅맥": 7300,
//   "맥치킨 모짜렐라": 5600,
//   "에그 불고기 버거": 4000,
//   "베이컨 토마토 디럭스": 6300,
//   "더블 치즈버거": 5200,
//   슈슈버거: 5300,
//   슈비버거: 6300,
//   치즈버거: 3100,
//   "더블 치즈버거": 5200,
//   "쿼터파운드 치즈": 6000,
//   "불고기 버거": 3100,
// };

function chooseMenu() {
  const burgerCard = document.querySelectorAll(".burger__card");
  burgerCard.forEach((burger) => {
    burger.addEventListener("click", (e) => {
      addToCart(e);
    });
  });
}

function addToCart(e) {
  const currentBurger = e.currentTarget.querySelector(
    ".burger__card__detail__name"
  );
  if (currentBurger.innerText in addList) {
    continueAdd(e, currentBurger);
  } else {
    initAdd(e, currentBurger);
  }
}

function initAdd(e, currentBurger) {
  addList[currentBurger.innerText] = [
    1,
    `₩${priceList[currentBurger.innerText]}`,
  ];
  localStorage.clear();
  localStorage.setItem(1, JSON.stringify(addList));
  console.log(localStorage);
  const burgerCart = $(".cart__menu");
  const menuContainer = document.createElement("div");
  const menuText = document.createElement("div");
  const countText = document.createElement("input");
  const priceText = document.createElement("div");
  const delBtn = document.createElement("button");

  burgerCart.appendChild(menuContainer);
  menuContainer.appendChild(menuText);
  menuContainer.appendChild(countText);
  menuContainer.appendChild(priceText);
  menuContainer.appendChild(delBtn);

  menuContainer.classList.add("add__menu");
  menuText.classList.add("add__menu__text");
  countText.classList.add("add__menu__count");
  countText.id = `${currentBurger.innerText}`;
  priceText.classList.add("add__menu__price");
  delBtn.classList.add("delete__btn");

  menuText.textContent = currentBurger.innerText;
  countText.value = addList[currentBurger.innerText][0];
  priceText.textContent = addList[currentBurger.innerText][1];
  delBtn.textContent = "X";
  countText.type = "number";

  addAmount(currentBurger);
  clickCancelBtn();
  checkInput(currentBurger);
}

function checkInput(currentBurger) {
  const addCount = document.getElementById(currentBurger.innerText);
  addCount.addEventListener("click", (e) => {
    const changedInput = Number(addCount.value);
    amountPrice +=
      (changedInput - addList[currentBurger.innerText][0]) *
      priceList[currentBurger.innerText];
    amountText.textContent = `₩${amountPrice.toLocaleString()}`;
    addList[currentBurger.innerText][0] = changedInput;
  });
}

function continueAdd(e, currentBurger) {
  continueCount(currentBurger);
  addAmount(currentBurger);
}

function continueCount(currentBurger) {
  const addCount = document.getElementById(currentBurger.innerText);
  addCount.value = Number(addCount.value) + 1;
  addList[currentBurger.innerText][0] += 1;
}

function addAmount(currentBurger) {
  amountPrice += priceList[currentBurger.innerText];
  amountText.textContent = `₩${amountPrice.toLocaleString()}`;
}

function clickCancelBtn() {
  const cancelBtn = document.querySelectorAll(".delete__btn");
  cancelBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      cancelMenu(e);
    });
  });
}

function cancelMenu(e) {
  const del = e.currentTarget.parentNode;
  if (addList[del.firstChild.innerText]) {
    amountPrice -=
      priceList[del.firstChild.innerText] *
      addList[del.firstChild.innerText][0];
    amountText.textContent = `₩${amountPrice.toLocaleString()}`;
    delete addList[del.firstChild.innerText];
    del.remove();
  }
  return;
}

function allCancel() {
  const allCancelBtn = $(".cancelBtn");
  allCancelBtn.addEventListener("click", (e) => {
    location.reload();
  });
}

function successOrder() {
  const orderBtn = $(".orderBtn");
  const modal = $(".modal");
  const modalBack = $(".modal__background");

  orderBtn.addEventListener("click", (e) => {
    modal.classList.remove("hide");
    modalBack.classList.remove("hide");
  });
  goNextPage();
  closeModal(modal, modalBack);
}

function goNextPage() {
  const yesBtn = $(".yesBtn");
  yesBtn.addEventListener("click", (e) => {
    location.href = "./src/order.html";
  });
}

function closeModal(modal, modalBack) {
  const noBtn = $(".noBtn");
  noBtn.addEventListener("click", (e) => {
    modal.classList.add("hide");
    modalBack.classList.add("hide");
  });
}
