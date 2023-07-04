document.addEventListener("DOMContentLoaded", function () {
  const rollButton = document.getElementById("rollButton");
  const result = document.getElementById("result");

  rollButton.addEventListener("click", function () {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    result.textContent = `You rolled a ${diceResult}!`;
  });
});
