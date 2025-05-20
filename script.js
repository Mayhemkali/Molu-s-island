
// Compliment list
const compliments = [
  "You laugh evilly when you’re well-fed. Adorable villain arc.",
  "That one look you give me before I pounce... iconic.",
  "You’re the hairiest silly man I’ve ever loved.",
  "Compassionate chaos in human form.",
  "You’re a walking warm fuzzy.",
  "Etta's favourite grown-up baby.",
  "Cuddle monster level: Expert.",
  "Professional silly goose.",
  "A gourmet food critic (in disguise).",
  "Master of dramatic stares.",
  "You make plants feel jealous of your glow.",
  "You’re the reason my face hurts from smiling.",
  "Seriously, how are you real?",
  "100% certified goofball. Science says so.",
  "You make even Mondays bearable.",
  "Snacc. With two c’s.",
  "A national treasure, honestly.",
  "You walk into a room and my serotonin spikes.",
  "Heartthrob with a huggable aura.",
  "You’re my favourite notification."
];

// Add sparkle particles
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 1000);
}
setInterval(createSparkle, 200);

// Compliment on Molu click
document.getElementById("molu-btn").addEventListener("click", () => {
  const compliment = compliments[Math.floor(Math.random() * compliments.length)];
  alert("💖 " + compliment);
});

// Show date/time on Heart click
document.getElementById("heart-btn").addEventListener("click", () => {
  const now = new Date();
  alert(`📅 ${now.toLocaleString()}`);
});

// To-do list logic
let todos = [];

function toggleTodo() {
  const task = prompt("📝 Enter a new task:");
  if (task) {
    todos.push(task);
    console.log("To-Do List:", todos);
    alert("Task added: " + task);
  }
}
document.getElementById("tree-btn").addEventListener("click", toggleTodo);
