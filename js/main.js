// script.js

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in-up");
  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 100);
  });
});
