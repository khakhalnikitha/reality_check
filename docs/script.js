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
function analyzeDecision() {
  const input = document.getElementById("decisionInput").value;

  let responses = [
    "You already know the answer. You're just avoiding it.",
    "You're choosing comfort over growth.",
    "Stop overthinking. Take action.",
    "This isn't confusion. It's fear."
  ];

  const random = Math.floor(Math.random() * responses.length);

  document.getElementById("decisionResult").innerText = responses[random];
}
function typeMessage() {
  const message = "You are not lost. You are avoiding the path you fear.";
  let i = 0;
  const speed = 40;

  document.getElementById("aiText").innerText = "";

  function typing() {
    if (i < message.length) {
      document.getElementById("aiText").innerText += message.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}
let truths = [];

function changeMode(mode) {
  if (mode === "normal") {
    truths = [
      "You need more focus.",
      "You're doing okay, but not enough."
    ];
  } else if (mode === "harsh") {
    truths = [
      "You're lazy. Admit it.",
      "No one is stopping you except you."
    ];
  } else {
    truths = [
      "You can change everything today.",
      "Start now. Not tomorrow."
    ];
  }
}
function generateTruth() {
  document.getElementById("clickSound").play();

  const random = Math.floor(Math.random() * truths.length);
  document.getElementById("truth").innerText = truths[random];
}
