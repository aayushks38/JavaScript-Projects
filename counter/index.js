const incrementbtn = document.getElementById("incrementbtn");
const decrementbtn = document.getElementById("decrementbtn");
const resetbtn = document.getElementById("resetbtn");
const countertable = document.getElementById("countertable");
const themeToggle = document.getElementById("themeToggle");

let count = localStorage.getItem("count")
  ? Number(localStorage.getItem("count"))
  : 0;

countertable.textContent = count;

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

// Counter animation
function animateCounter() {
  countertable.classList.add("bump");
  setTimeout(() => {
    countertable.classList.remove("bump");
  }, 150);
}

function updateCounter() {
  countertable.textContent = count;
  animateCounter();
  localStorage.setItem("count", count);
}

function increment() {
  count++;
  updateCounter();
}

function decrement() {
  count--;
  updateCounter();
}

function reset() {
  count = 0;
  updateCounter();
}

// Button events
incrementbtn.addEventListener("click", increment);
decrementbtn.addEventListener("click", decrement);
resetbtn.addEventListener("click", reset);

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    increment();
  } else if (e.key === "ArrowDown") {
    decrement();
  } else if (e.key === "r" || e.key === "R") {
    reset();
  }
});

// Dark mode toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
