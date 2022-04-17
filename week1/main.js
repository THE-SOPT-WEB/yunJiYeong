window.onload = () => {
  chooseMenu();
};

function chooseMenu() {
  const burgerCard = document.querySelectorAll(".burger__card");
  burgerCard.forEach((burger) => {
    burger.addEventListener("click", (e) => {
      addToCart(e);
    });
  });
}

function addToCart(e) {
  const burgerName = e.currentTarget.querySelector(
    ".burger__card__detail__name"
  );
  const burgerCart = document.querySelector(".cart__menu");
  const menuContainer = document.createElement("div");
  burgerCart.appendChild(menuContainer);
  menuContainer.classList.add("add__menu");
  menuContainer.textContent = burgerName.innerText;
}

//section addtocart에 flex-grow 적용해라
