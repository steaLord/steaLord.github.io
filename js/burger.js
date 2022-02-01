let isOn = false;

function OnOffAction() {
  if (isOn) isOn = false;
  else isOn = true;
}
const body = document.querySelector("body");
const html = document.querySelector("html");
const nav_bar = document.querySelector(".nav_bar");

function burger() {
  if (isOn) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    nav_bar.style.display = "flex";
    nav_bar.style.top = "0";
    html.style.overflow = "hidden";
    nav_bar.classList.add("open");
  } else {
    nav_bar.style.top = "-120%";
    html.style.overflow = "visible";
    nav_bar.classList.remove("open");
  }
}
