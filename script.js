const compliments = [
  "You're the sparkle in my pixelated sky ✨",
  "I’d pause my game for you any day 🎮❤️",
  "You're a daily power-up in my life 💘",
  "Cutest NPC in all the lands 🌍",
  "You're the rarest drop in my world 🌟"
];

function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    document.getElementById('todo-list').appendChild(li);
    taskInput.value = '';
  }
}

function showCompliment() {
  const compliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById('compliment-text').textContent = compliment;
}
