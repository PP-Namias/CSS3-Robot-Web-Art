CSS.registerProperty({
  name: "--hand-x",
  syntax: "<length>",
  inherits: false,
  initialValue: "-8px",
});

const EVE_FACES = ["happy", "circle", "ellipse"];
const panel = document.querySelector(".panel");
const scanner = document.querySelector(".scanner");
const face = document.querySelector(".face");
const eve = document.querySelector(".eve");

const toggleAnimated = () => {
  panel.classList.toggle("animated");
  scanner.classList.remove("animated");
  setTimeout(() => scanner.classList.add("animated"), 12000);
};

const changeEveFace = () => {
  const randomFace = Math.floor(Math.random() * 3);
  const faceName = EVE_FACES[randomFace];
  face.className = `${faceName} face`;
};

setInterval(() => toggleAnimated(), 20000);
toggleAnimated();

eve.addEventListener("click", changeEveFace);
