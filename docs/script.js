// ONLY ONE truths array
let truths = [
  "You're not tired. You're distracted.",
  "You know what to do. You just don't do it.",
  "Excuses are your comfort zone.",
  "Discipline is missing from your life."
];

// Truth Generator
function generateTruth() {
  const random = Math.floor(Math.random() * truths.length);
  document.getElementById("truth").innerText = truths[random];
}

// Personality Test
function answer(choice) {
  let resultText = "";

  if (choice === "yes") {
    resultText = "You're disciplined. But are you consistent?";
  } else {
    resultText = "You lack discipline. Comfort controls you.";
  }

  document.getElementById("result").innerText = resultText;
}

// Decision Analyzer
function analyzeDecision() {
  const responses = [
    "You already know the answer.",
    "You're avoiding action.",
    "Stop overthinking.",
    "This is fear, not confusion."
  ];

  const random = Math.floor(Math.random() * responses.length);
  document.getElementById("decisionResult").innerText = responses[random];
}

// Typewriter AI
function typeMessage() {
  const message = "You are avoiding the truth you already know.";
  let i = 0;

  document.getElementById("aiText").innerText = "";

  function typing() {
    if (i < message.length) {
      document.getElementById("aiText").innerText += message.charAt(i);
      i++;
      setTimeout(typing, 40);
    }
  }

  typing();
}

  
