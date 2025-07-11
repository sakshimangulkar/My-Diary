const quotes = [
  "Believe you can and you're halfway there.",
  "Every day is a second chance.",
  "You are capable of amazing things.",
  "Start where you are. Use what you have. Do what you can.",
  "Your only limit is your mind."
];

document.getElementById("quote").textContent = quotes[Math.floor(Math.random() * quotes.length)];

function saveEntry() {
  const entryText = document.getElementById("entry").value;
  const mood = document.getElementById("mood").value;
  const dateKey = new Date().toLocaleDateString();

  const data = {
    text: entryText,
    mood: mood,
    date: dateKey
  };

  localStorage.setItem(`journal-${dateKey}`, JSON.stringify(data));
  displayLastEntry();
  alert("Entry saved for " + dateKey);
}

function displayLastEntry() {
  const today = new Date().toLocaleDateString();
  const data = localStorage.getItem(`journal-${today}`);
  const savedDiv = document.getElementById("saved-entry");

  if (data) {
    const entry = JSON.parse(data);
    savedDiv.innerHTML = `<strong>Date:</strong> ${entry.date}<br>
                          <strong>Mood:</strong> ${entry.mood}<br>
                          <strong>Note:</strong> ${entry.text}`;
  } else {
    savedDiv.textContent = "No entry yet.";
  }
}

displayLastEntry();

// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
