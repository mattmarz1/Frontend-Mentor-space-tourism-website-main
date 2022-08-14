"use strict";

const headerListItems = document.querySelectorAll("header nav ul li");
const headerListItemsAnchor = document.querySelectorAll("header nav ul li a");
const mobileNavIcon = document.querySelector(".mobile-menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuCloseIcon = document.querySelector(".close-button");
const maxWidth = window.matchMedia("(max-width: 550px)");
// PUTS A BOTTOM BORDER FOR THE CURRENT HOVERED ANCHOR ELEMENT

// for (const x of headerListItemsAnchor) {
//   x.addEventListener("mouseenter", function () {
//     x.style.border = "3px solid red";
//   });
// }

// DOES NOT WORK

// for (const x of headerListItemsAnchor) {
//   x.addEventListener("mouseenter", function () {
//     headerListItems[x].style.border = "3px solid red";
//   });
// }

for (let i = 0; i < headerListItemsAnchor.length; i++) {
  if (!headerListItems[i].classList.contains("active-page")) {
    headerListItemsAnchor[i].addEventListener("mouseenter", function () {
      headerListItems[i].style.borderBottom = "3px solid hsl(0 0% 100% / 0.5)";
    });

    headerListItemsAnchor[i].addEventListener("mouseleave", function () {
      headerListItems[i].style.borderBottom = "initial";
    });
  }
}

mobileNavIcon.addEventListener("click", function () {
  mobileMenu.style.display = "block";

  window.addEventListener("resize", function () {
    if (!maxWidth.matches) {
      mobileMenu.style.display = "none";
    }
  });
});

mobileMenuCloseIcon.addEventListener("click", function () {
  mobileMenu.style.display = "none";
});
