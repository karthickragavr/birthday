const messages = [
    "Your smile is my favorite part of every day.",
    "I love the way you always know exactly what to say.",
    "Thank you for being my rock and my best friend.",
    "Every moment with you feels like a dream come true.",
    "You make even the most ordinary days feel special.",
    "I'm so lucky to have you in my life.",
    "You're the first thing I think about when I wake up."
];

function updateDailyMessage() {
    const now = new Date();
    // Calculate a unique index based on the date
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const messageIndex = dayOfYear % messages.length;
    
    document.getElementById('daily-message').innerText = `"${messages[messageIndex]}"`;
}

// Initial load
updateDailyMessage();
