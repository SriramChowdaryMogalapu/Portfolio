const texts = [
  "Explorer of Data Science",
  "Computer Science Student",
  "Full Stack Web Developer",
];

let currentIndex = 0;
function changeText() {
  document.getElementById("content-type").textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(changeText, 2000);
