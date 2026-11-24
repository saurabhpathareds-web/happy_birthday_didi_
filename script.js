// PIN UNLOCK
function unlockWebsite() {
    const pin = document.getElementById("pinInput").value;

    if (pin === "2511") {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainWebsite").style.display = "block";

        // Play Birthday Song
        const birthdaySong = document.querySelector("audio");
        birthdaySong.play().catch(error => {
            console.log("Click play button to start music");
        });

        window.scrollTo(0, 0);
        createHearts();

    } else {
        document.getElementById("error").innerText =
            "Wrong PIN! Try again Didi 💕";
    }
}


// START SURPRISE

function cutCake() {
    const cake = document.getElementById("cake");

    cake.classList.remove("cut");
    void cake.offsetWidth;
    cake.classList.add("cut");

    cake.innerText = "🍰";

    document.getElementById("cakeMessage").innerText =
        "Happy Birthday Didi! Make a beautiful wish! 💕🎉";

    createConfetti();
}

// BIRTHDAY GAME
function gameAnswer() {
    document.getElementById("gameResult").innerText =
        "Correct! Your little brother is the luckiest! 😂❤️";
}

// FLOATING HEARTS
function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.innerText = "💗";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = "25px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        heart.animate(
            [
                { transform: "translateY(0)", opacity: 1 },
                { transform: "translateY(-100vh)", opacity: 0 }
            ],
            {
                duration: 4000 + Math.random() * 3000
            }
        );

        setTimeout(() => heart.remove(), 7000);
    }
}

// CONFETTI CELEBRATION
function createConfetti() {

    for (let i = 0; i < 60; i++) {

        const confetti = document.createElement("div");

        confetti.innerText = ["💗", "✨", "🎉", "💕"][
            Math.floor(Math.random() * 4)
        ];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "22px";
        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "999";

        document.body.appendChild(confetti);

        confetti.animate(
            [
                { transform: "translateY(0) rotate(0deg)", opacity: 1 },
                { transform: "translateY(100vh) rotate(360deg)", opacity: 0 }
            ],
            {
                duration: 3000 + Math.random() * 2000
            }
        );

        setTimeout(() => confetti.remove(), 5500);
    }
}

let currentMemory = 1;
let memoryDirection = "next";

const captions = [
    "Our sweetest beginning 💗",
    "A memory to cherish forever 🥹",
    "Your beautiful smile ❤️",
    "Together, making memories ✨",
    "One of my favourite moments 💕",
    "You make every moment special 🌸",
    "A little moment, a big memory 💖",
    "Forever grateful for you 🫶",
    "Keep smiling, Didi 💗",
    "You are truly special 🌷",
    "More beautiful memories ahead ✨",
    "Happy Birthday, Didi! I love you ❤️"
];
document.getElementById("memoryProgressBar").style.width =
    (currentMemory / 12 * 100) + "%";

document.getElementById("memoryCount").innerText =
    currentMemory + " of 12 memories";
document.getElementById("finalSurprise").style.display =
    currentMemory === 12 ? "block" : "none";

function openMemories() {
    currentMemory = 1;
    memoryDirection = "next";
    document.getElementById("memorySlideshow").style.display = "block";
    showMemory();
}

function showMemory() {
    const photo = document.getElementById("memoryPhoto");

    photo.classList.remove("memory-next", "memory-prev");

    photo.src = "memories/" + currentMemory + ".jpeg";

    document.getElementById("memoryTitle").innerText =
        "MEMORY " + currentMemory + " / 12 ❤️";

    document.getElementById("memoryCaption").innerText =
        captions[currentMemory - 1];
    document.getElementById("memoryProgressBar").style.width =
    (currentMemory / 12 * 100) + "%";

    document.getElementById("memoryCount").innerText =
    currentMemory + " of 12 memories";
    document.getElementById("finalSurprise").style.display =
        currentMemory === 12 ? "block" : "none";

    void photo.offsetWidth;

    photo.classList.add(
        memoryDirection === "next" ? "memory-next" : "memory-prev"
    );
}

function nextMemory() {
    if (currentMemory < 12) {
        currentMemory++;
        memoryDirection = "next";
        showMemory();
    } 
    else {
        openGift();
    }
}

function previousMemory() {
    if (currentMemory > 1) {
        currentMemory--;
        memoryDirection = "prev";
        showMemory();
    }
}

function closeMemories() {
    document.getElementById("memorySlideshow").style.display = "none";
}
function openGift() {
    document.getElementById("giftBox").style.display = "none";

    document.getElementById("giftMessage").style.display = "block";

    createConfetti();
}

function createConfetti() {
    const surprise = document.getElementById("finalSurprise");

    const colors = [
        "#ff69b4",
        "#ff1493",
        "#ffd700",
        "#9370db",
        "#00ced1"
    ];

    for (let i = 0; i < 50; i++) {
        const piece = document.createElement("div");

        piece.className = "confetti";
        piece.style.left = Math.random() * 100 + "%";
        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay = Math.random() * 2 + "s";

        surprise.appendChild(piece);

        piece.addEventListener("animationend", () => {
            piece.remove();
        });
    }
}
function openLetter() {
    document.getElementById("birthdayLetter").style.display = "block";
}
function blowCandles() {
    document.querySelectorAll(".flame").forEach(flame => {
        flame.style.visibility = "hidden";
    });

    document.getElementById("cakeWish").style.display = "block";
}
function loveAnswer() {
    document.getElementById("loveAnswerText").style.display = "block";
}
// BIRTHDAY FIREWORKS 🎆
function launchFireworks() {

    const emojis = ["🎆", "✨", "🎇", "💖", "💕"];

    for (let burst = 0; burst < 5; burst++) {

        setTimeout(() => {

            for (let i = 0; i < 12; i++) {

                const firework = document.createElement("span");

                firework.innerText =
                    emojis[Math.floor(Math.random() * emojis.length)];

                firework.style.position = "fixed";
                firework.style.left = (20 + Math.random() * 60) + "vw";
                firework.style.top = (20 + Math.random() * 50) + "vh";
                firework.style.fontSize = "25px";
                firework.style.zIndex = "9999";
                firework.style.pointerEvents = "none";

                document.body.appendChild(firework);

                firework.animate(
                    [
                        { transform: "scale(0)", opacity: 1 },
                        { transform: "scale(2) translateY(-100px)", opacity: 0 }
                    ],
                    { duration: 1500 }
                );

                setTimeout(() => firework.remove(), 1500);
            }

        }, burst * 500);
    }
}