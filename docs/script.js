function calculate() {
  let study = document.getElementById("study").value;
  let waste = document.getElementById("waste").value;

  study = Number(study);
  waste = Number(waste);

  let score = study * 10 - waste * 5;

  let message = "";

  if (score > 50) {
    message = "You're in control. Stay consistent.";
  } else if (score > 20) {
    message = "You're average. Improve your discipline.";
  } else {
    message = "You're wasting your potential.";
  }

  document.getElementById("output").innerText =
    "Score: " + score + " → " + message;
}
