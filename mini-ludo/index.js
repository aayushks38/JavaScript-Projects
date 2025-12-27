const rollBtn = document.getElementById("rollBtn");
const diceResult = document.getElementById("diceResult");
const diceIcon = document.getElementById("diceIcon");

let position = 0;
let started = false;
const totalCells = 9;

rollBtn.onclick = function () {
  diceIcon.classList.add("shake");
  setTimeout(() => diceIcon.classList.remove("shake"), 500);

  const dice = Math.floor(Math.random() * 6) + 1;
  diceResult.textContent = "Dice: " + dice;

  if (!started) {
    if (dice === 6) {
      started = true;
      setTimeout(() => {
    alert("🎉 You rolled 6! Token enters the board.");
  }, 300);
    } else {
      setTimeout(() => {
    alert("Roll a 6 to start!");
  }, 300);
      return;
    }
  }

  moveToken(dice);
};

function moveToken(dice) {
  const remaining = totalCells - position;

  if (dice > remaining) {
    alert(`You need exactly ${remaining} to reach home!`);
    return;
  }

  document.getElementById(`cell-${position}`).textContent = "";

  position += dice;

  if (position === totalCells) {

  rollBtn.disabled = true;
   setTimeout(() => {
    alert("🏆 Congratulations! You reached HOME!");
  }, 300);
  return;
 }

  const cell = document.getElementById(`cell-${position}`);
  cell.textContent = "🔴";
  cell.classList.add("slide");

  setTimeout(() => cell.classList.remove("slide"), 350);
}
