const tasks = document.querySelectorAll('input[type="checkbox"]');
const progress = document.getElementById("progress");

tasks.forEach(task => {
  task.addEventListener("change", () => {
    const completed = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    ).length;

    const percentage = Math.round((completed / tasks.length) * 100);
    progress.textContent = "Progress: " + percentage + "%";
  });
});

let timeLeft = 25 * 60;
let timerInterval;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("startBtn");
const resetButton = document.getElementById("resetBtn");

startButton.addEventListener("click", () => {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent =
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Study session complete! 🎉");
    }

    timeLeft--;
  }, 1000);
});

resetButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 25 * 60;
  timerDisplay.textContent = "25:00";
});

const themeButton = document.getElementById("themeBtn");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "☀️ Light Mode";
  } else {
    themeButton.textContent = "🌙 Dark Mode";
  }
});
