const truths = [
  "You're not tired. You're distracted.",
  "You know what to do. You just don't do it.",
  "Excuses are your comfort zone.",
  "Discipline is missing from your life."
];

function generateTruth() {
  const random = Math.floor(Math.random() * truths.length);
  document.getElementById("truth").innerText = truths[random];
}
function answer(choice) {
  let resultText = "";

  if (choice === "yes") {
    resultText = "You're disciplined. But are you consistent every day?";
  } else {
    resultText = "You lack discipline. Comfort controls you.";
  }

  document.getElementById("result").innerText = resultText;
}
