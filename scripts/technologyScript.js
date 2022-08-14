"use strict";

const headerListItems = document.querySelectorAll("header nav ul li");
const headerListItemsAnchor = document.querySelectorAll("header nav ul li a");

const termDot1 = document.querySelector(".term-dot1");
const termDot2 = document.querySelector(".term-dot2");
const termDot3 = document.querySelector(".term-dot3");
const termDots = document.querySelectorAll(".term-left div");
const spaceCraftName = document.querySelector(".term-right p:nth-child(2)");
const spaceCraftAbout = document.querySelector(".term-right p:nth-child(3)");
const spaceCraftImg = document.querySelector(".right-side .spacecraft");
const rightSide = document.querySelector(".right-side");
const mobileNavIcon = document.querySelector(".mobile-menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuCloseIcon = document.querySelector(".close-button");
const maxWidth = window.matchMedia("(max-width: 550px)");

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

termDot1.addEventListener("click", function () {
  spaceCraftName.innerHTML = "Launch Vehicle";

  termDots.forEach(function (el) {
    el.classList.remove("term-dot-active");
  });

  termDot1.classList.add("term-dot-active");

  spaceCraftAbout.innerHTML =
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";

  rightSide.innerHTML = `<picture>
           <source media="(min-width: 1101px)" srcset="assets/technology/image-launch-vehicle-portrait.jpg">
           <source media="(max-width: 1100px)" srcset="assets/technology/image-launch-vehicle-landscape.jpg">
           <img src="download.png" alt="" />
        </picture>`;
});

// --------------------------------------------------
termDot2.addEventListener("click", function () {
  spaceCraftName.innerHTML = "Spaceport";

  termDots.forEach(function (el) {
    el.classList.remove("term-dot-active");
  });

  termDot2.classList.add("term-dot-active");

  spaceCraftAbout.innerHTML =
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";

  rightSide.innerHTML = `<picture>
           <source media="(min-width: 1101px)" srcset="assets/technology/image-spaceport-portrait.jpg">
           <source media="(max-width: 1100px)" srcset="assets/technology/image-spaceport-landscape.jpg">
           <img src="download.png" alt="" />
        </picture>`;
});

termDot3.addEventListener("click", function () {
  spaceCraftName.innerHTML = "Space Capsule";

  termDots.forEach(function (el) {
    el.classList.remove("term-dot-active");
  });

  termDot3.classList.add("term-dot-active");

  spaceCraftAbout.innerHTML =
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";

  rightSide.innerHTML = `<picture>
           <source media="(min-width: 1101px)" srcset="assets/technology/image-space-capsule-portrait.jpg">
           <source media="(max-width: 1100px)" srcset="assets/technology/image-space-capsule-landscape.jpg">
           <img src="download.png" alt="" />
        </picture>`;
});
