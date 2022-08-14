"use strict";

const headerListItems = document.querySelectorAll("header nav ul li");
const headerListItemsAnchor = document.querySelectorAll("header nav ul li a");
const dot1 = document.querySelector(".dot-container .dot1");
const dot2 = document.querySelector(".dot-container .dot2");
const dot3 = document.querySelector(".dot-container .dot3");
const dot4 = document.querySelector(".dot-container .dot4");
const dots = document.querySelectorAll(".dot-container div");
const position = document.querySelector(".left-side p:nth-child(2");
const name = document.querySelector(".left-side p:nth-child(3");
const positionAbout = document.querySelector(".left-side p:nth-child(4");
const positionImg = document.querySelector(".right-side img");
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

dot1.addEventListener("click", function () {
  dots.forEach(function (el) {
    el.classList.remove("dot-active");
  });

  dot1.classList.add("dot-active");
  position.innerHTML = "Commander";
  name.innerHTML = "Douglas Hurley";
  positionAbout.innerHTML =
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2. ";
  positionImg.src = "assets/crew/image-douglas-hurley.png";
});

dot2.addEventListener("click", function () {
  dots.forEach(function (el) {
    el.classList.remove("dot-active");
  });

  dot2.classList.add("dot-active");
  position.innerHTML = "Mission Specalist";
  name.innerHTML = "Mark Shuttleworth";
  positionAbout.innerHTML =
    "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
  positionImg.src = "assets/crew/image-mark-shuttleworth.png";
});

dot3.addEventListener("click", function () {
  dots.forEach(function (el) {
    el.classList.remove("dot-active");
  });

  dot3.classList.add("dot-active");
  position.innerHTML = "Pilot";
  name.innerHTML = "Victor Glover";
  positionAbout.innerHTML =
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
  positionImg.src = "assets/crew/image-victor-glover.png";
});

dot4.addEventListener("click", function () {
  dots.forEach(function (el) {
    el.classList.remove("dot-active");
  });

  dot4.classList.add("dot-active");
  position.innerHTML = "Flight Engineer";
  name.innerHTML = "Anousheh Ansari";
  positionAbout.innerHTML =
    "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
  positionImg.src = "assets/crew/image-anousheh-ansari.png";
});
