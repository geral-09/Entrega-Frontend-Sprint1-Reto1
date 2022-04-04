const body = document.querySelector("body");
const nav = document.querySelector("nav");
const abrir_Menu = document.querySelector(".open-menu");
const cerrar_Menu = document.querySelector(".close-menu");
const Logo = document.querySelector(".header__logo");

abrir_Menu.addEventListener("click", () => {
  nav.style.marginLeft = "0";
  Logo.style.display = "none";
  abrir_Menu.style.display = "none";
});

cerrar_Menu.addEventListener("click", () => {
  nav.style.marginLeft = "-700px";
  Logo.style.display = "block";
  abrir_Menu.style.display = "block";
});

const marker = document.querySelector("#marker");
const items = document.querySelectorAll(".nav__features a");
const tabs = document.querySelectorAll(".features__tabs .show-tab");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index === 0) {
      tabs[0].style.display = "block";
      tabs[1].classList.remove("active-tab");
      tabs[2].classList.remove("active-tab");
    }
    if (index === 1) {
      tabs[1].classList.add("active-tab");
      tabs[0].style.display = "none";
      tabs[2].classList.remove("active-tab");
    }
    if (index === 2) {
      tabs[2].classList.add("active-tab");
      tabs[0].style.display = "none";
      tabs[1].classList.remove("active-tab");
    }
  });
});

function indicador(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    indicador(e.target);
  });
});
