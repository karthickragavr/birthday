let score = 0;
let bossHealth = 5;
let gameActive = true;
const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');
const boss = document.getElementById('boss');

// 1. Jump Logic
document.addEventListener('keydown', (e) => {
    if (e.code === "Space" && !player.classList.contains("jump")) {
        player.classList.add("jump");
        setTimeout(() => player.classList.remove("jump"), 500);
    }
});

// 2. Obstacle Movement & Collision
let gameLoop = setInterval(() => {
    if (!gameActive) return;

    let obsLeft = parseInt(window.getComputedStyle(obstacle).left);
    let playerBottom = parseInt(window.getComputedStyle(player).bottom);

    // Reset obstacle
    if (obsLeft < -50) {
        obstacle.style.left = "600px";
        score++;
        document.getElementById('score-val').innerText = score;
        
        // Trigger Boss Battle at Score 10
        if (score >= 10) {
            startBossBattle();
        }
    } else {
        obstacle.style.left = (obsLeft - 5) + "px";
    }

    // Collision Detection
    if (obsLeft > 50 && obsLeft < 90 && playerBottom < 40) {
        alert("Oops! Try again for love!");
        location.reload();
    }
}, 20);

function startBossBattle() {
    gameActive = false;
    obstacle.style.display = "none";
    boss.style.display = "block";
    document.getElementById('status').innerText = "TAP THE HEART TO REVEAL THE MESSAGE!";
}

// 3. Boss Defeat
boss.addEventListener('click', () => {
    bossHealth--;
    boss.style.transform = "scale(0.8)";
    setTimeout(() => boss.style.transform = "scale(1)", 100);
    
    if (bossHealth <= 0) {
        boss.style.display = "none";
        document.getElementById('letter').classList.remove('hidden');
        document.getElementById('daily-message').innerText = "You've beaten the game and won my heart. I love you more than all the code in the world!";
    }
});
