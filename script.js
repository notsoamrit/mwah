const enterBtn = document.getElementById("enterBtn");
const loader = document.getElementById("loader");
const music = document.getElementById("music");

enterBtn.addEventListener("click", () => {
  loader.style.opacity = "0";
  loader.style.pointerEvents = "none";

  music.volume = 0.35;
  music.play().catch(() => {});
});

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

const stars = document.querySelectorAll(".star");
const popup = document.getElementById("popup");

stars.forEach(star => {
  star.addEventListener("click", () => {
    popup.innerText = star.dataset.text;
  });
});
