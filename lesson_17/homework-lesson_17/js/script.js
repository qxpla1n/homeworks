"use strict";

document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest(".burger")) {
    document.documentElement.toggleAttribute("data-menu-open");
    document.documentElement.classList.toggle('is-lock');
  }
}
