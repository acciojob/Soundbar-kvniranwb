// your JS code here

const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];

const buttonsDiv = document.getElementById("buttons");

let currentAudio = null;

// create sound buttons
sounds.forEach((sound) => {
    const btn = document.createElement("button");

    btn.innerText = sound;
    btn.classList.add("btn");

    btn.addEventListener("click", () => {

        // stop previous sound
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(`sounds/${sound}.mp3`);
        currentAudio.play();
    });

    buttonsDiv.appendChild(btn);
});

// stop button
const stopBtn = document.createElement("button");

stopBtn.innerText = "stop";
stopBtn.classList.add("stop");

stopBtn.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});

buttonsDiv.appendChild(stopBtn);