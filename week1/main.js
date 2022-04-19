let amountPrice = 0;

window.onload = () => {
  chooseMenu();
};

let priceList = {
  "리코타 치킨 버거": 6300,
  "더블 빅맥": 7300,
  "맥치킨 모짜렐라": 5600,
  "에그 불고기 버거": 4000,
  "베이컨 토마토 디럭스": 6300,
  "더블 치즈버거": 5200,
  슈슈버거: 5300,
  슈비버거: 6300,
  치즈버거: 3100,
  "더블 치즈버거": 5200,
  "쿼터파운드 치즈": 6000,
  "불고기 버거": 3100,
};

const addList = {};

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

const amountText = document.querySelector(".amount__price");
function initAdd(e, currentBurger) {
  addList[currentBurger.innerText] = [
    1,
    `₩${priceList[currentBurger.innerText]}`,
  ];

  const burgerCart = document.querySelector(".cart__menu");
  const menuContainer = document.createElement("div");
  const menuText = document.createElement("div");
  const countText = document.createElement("div");
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
  countText.textContent = addList[currentBurger.innerText][0];
  priceText.textContent = addList[currentBurger.innerText][1];
  delBtn.textContent = "X";

  addAmount(currentBurger);
  clickCancelBtn();
}

function continueAdd(e, currentBurger) {
  continueCount(currentBurger);
  addAmount(currentBurger);
}

function continueCount(currentBurger) {
  addList[currentBurger.innerText][0] += 1;
  const addCount = document.getElementById(currentBurger.innerText);
  addCount.textContent = addList[currentBurger.innerText][0];
}

function addAmount(currentBurger) {
  amountPrice += priceList[currentBurger.innerText];
  amountText.textContent = `₩${amountPrice}`;
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
  const del = e.target.parentNode;
  del.remove();
}

function allCancel() {
  const allCancelBtn = document.querySelector(".cancelBtn");
  allCancelBtn.addEventListener("click", (e) => {
    location.reload();
  });
}

function successOrder() {
  const orderBtn = document.querySelector(".orderBtn");
  const modal = document.querySelector(".modal");
  const modalBack = document.querySelector(".modal__background");

  orderBtn.addEventListener("click", (e) => {
    modal.classList.remove("hide");
    modalBack.classList.remove("hide");
  });
  goNextPage();
  closeModal(modal, modalBack);
}
allCancel();
successOrder();

function goNextPage() {
  const yesBtn = document.querySelector(".yesBtn");
  yesBtn.addEventListener("click", (e) => {
    location.href = "./src/order.html";
  });
}

function closeModal(modal, modalBack) {
  const noBtn = document.querySelector(".noBtn");
  noBtn.addEventListener("click", (e) => {
    modal.classList.add("hide");
    modalBack.classList.add("hide");
  });
  console.log(noBtn);
}
