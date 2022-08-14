"use strict";

const headerListItems = document.querySelectorAll("header nav ul li");
const headerListItemsAnchor = document.querySelectorAll("header nav ul li a");
const mobileNavIcon = document.querySelector(".mobile-menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuCloseIcon = document.querySelector(".close-button");

const moon = document.querySelector(".right-side nav ul li:first-child");
const moonListItem = document.querySelector(
  " .right-side nav ul li:nth-child(1)"
);
const marsListItem = document.querySelector(
  ".right-side nav ul li:nth-child(2)"
);
const europaListItem = document.querySelector(
  ".right-side nav ul li:nth-child(3)"
);

const titanListItem = document.querySelector(
  ".right-side nav ul li:nth-child(4)"
);
const planetText = document.querySelector(".planet-text");

const listItems = document.querySelectorAll(".right-side nav ul li");
const mainText = document.querySelector(".main-text");
const planetImg = document.querySelector(".left-side img");
const planetAverageTime = document.querySelector(
  ".planet-info .distance p:last-child"
);
const planetTravelTime = document.querySelector(
  ".planet-info .travel-time p:last-child"
);
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

moonListItem.addEventListener("click", function () {
  planetText.innerHTML = "moon";

  listItems.forEach(function (el) {
    el.classList.remove("li-active");
  });

  moonListItem.classList.add("li-active");
  mainText.innerHTML =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  planetImg.src = "assets/destination/image-moon.png";
  planetAverageTime.innerHTML = "384,400 km";
  planetTravelTime.innerHTML = "3 days";
});

marsListItem.addEventListener("click", function () {
  planetText.innerHTML = "Mars";

  listItems.forEach(function (el) {
    el.classList.remove("li-active");
  });

  marsListItem.classList.add("li-active");
  mainText.innerHTML =
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  planetImg.src = "assets/destination/image-mars.png";
  planetAverageTime.innerHTML = "225 MIL. km";
  planetTravelTime.innerHTML = "9 Months";
});

europaListItem.addEventListener("click", function () {
  planetText.innerHTML = "Europa";

  listItems.forEach(function (el) {
    el.classList.remove("li-active");
  });

  europaListItem.classList.add("li-active");
  mainText.innerHTML =
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  planetImg.src = "assets/destination/image-europa.png";
  planetAverageTime.innerHTML = "628 MIL. km";
  planetTravelTime.innerHTML = "3 Months";
});

titanListItem.addEventListener("click", function () {
  planetText.innerHTML = "Titan";

  listItems.forEach(function (el) {
    el.classList.remove("li-active");
  });

  titanListItem.classList.add("li-active");
  mainText.innerHTML =
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  planetImg.src = "assets/destination/image-titan.png";
  planetAverageTime.innerHTML = "1.6 BIL. km";
  planetTravelTime.innerHTML = "7 Months";
});
