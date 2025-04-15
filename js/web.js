

// ABRIR Y CERRAR EL MENU DE NAV.
const ButtonMenu  = document.getElementById("menu--button");
const HeaderMenu  = document.getElementById("header__menu");
const HeaderNav   = document.getElementById("header__nav");


function openMenu() {
  ButtonMenu.innerText = "Cerrar";
  HeaderNav.classList.toggle("header__nav-active");
  HeaderMenu.classList.toggle("header__menu-active");
  ButtonMenu.classList.toggle("header__menu--button-active");
}

function closeMenu() {
  ButtonMenu.innerText = "Menu";
  HeaderNav.classList.remove("header__nav-active");
  HeaderMenu.classList.remove("header__menu-active");
  ButtonMenu.classList.remove("header__menu--button-active");
}


ButtonMenu.addEventListener("click", () => {
  if (ButtonMenu.innerText == "Menu") {
    openMenu()
  } else {
    closeMenu()
  }
})





// ABRIR Y CERRAR [ANTES DE...] MORE INFO BIO.
const ButtonMore    = document.getElementById("more--button")
const MoreInfo      = document.getElementById("more--info")

ButtonMore.addEventListener("click", () => {
  MoreInfo.classList.toggle("more--info-active")
})











