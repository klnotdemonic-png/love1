const nextBtn = document.getElementById("nextBtn");
const text = document.getElementById("text");
const questionBox = document.getElementById("questionBox");
const responseBox = document.getElementById("responseBox");
const sadBox = document.getElementById("sadBox");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartsContainer = document.querySelector(".hearts");

// Animasi tulisan pelan
function typeText(element, message, speed = 60, callback) {
  element.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += message.charAt(i);
    i++;
    if (i >= message.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, speed);
}

// klik tombol pertama
nextBtn.addEventListener("click", () => {
  nextBtn.style.display = "none";
  typeText(text, "i love everything about u", 60, () => {
    setTimeout(() => {
      text.style.display = "none";
      questionBox.style.display = "block";
    }, 800);
  });
});

// klik YA
yesBtn.addEventListener("click", () => {
  questionBox.style.display = "none";
  responseBox.style.display = "block";
  spawnHearts();
});

// klik TIDAK
noBtn.addEventListener("click", () => {
    noBtn.classList.add("fade-out");
    setTimeout(() => {
        noBtn.style.display = "none";
    }, 800);
    setTimeout(() => {
        questionBox.style.display = "none";
        sadBox.style.display = "block";
    }, 900);
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// efek hati beterbangan
function spawnHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDelay = Math.random() * 1.5 + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}
