const incrementbtn = document.getElementById("incrementbtn");
const decrementbtn = document.getElementById("decrementbtn");
const resetbtn = document.getElementById("resetbtn");
const countertable = document.getElementById("countertable");
const themeToggle = document.getElementById("themeToggle");

let count = 0;

function animateCounter() {
    countertable.classList.add("bump");
    setTimeout(() => {
        countertable.classList.remove("bump");
    }, 150);
}


incrementbtn.addEventListener("click", () => {
    count++;
    countertable.textContent = count;
    animateCounter();
});

decrementbtn.addEventListener("click", () => {
    count--;
    countertable.textContent = count;
    animateCounter();
});

resetbtn.addEventListener("click", () => {
    count = 0;
    countertable.textContent = count;
    animateCounter();
});

/* DARK MODE TOGGLE */
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
