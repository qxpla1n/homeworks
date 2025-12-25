"use strict";

document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest(".burger")) {
    document.documentElement.toggleAttribute("data-menu-open");
    document.documentElement.classList.toggle('is-lock');
  }
}

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});
