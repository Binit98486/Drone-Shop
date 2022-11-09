"use strict";
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const modal = document.querySelector(".modal");
const showModal = document.querySelector(".show-modal");
const overLay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-madal");

function openModal() {
  modal.classList.remove("hidden");
  overLay.classList.remove("hidden");
}
showModal.addEventListener("click", openModal);

//close modal when clicked in closed button or outside
function closemodal() {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
}
document.querySelector(".close-modal").addEventListener("click", closemodal);
document.querySelector(".overlay").addEventListener("click", closemodal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closemodal();
  }
});
