//your JS code here. If required.
const sounds = ["sound1", "sound2", "sound3", "sound4"];

const buttonsDiv = document.getElementById("buttons");

let currentAudio = null;

// Create sound buttons
sounds.forEach(sound => {

    const btn = document.createElement("button");

    btn.classList.add("btn");

    btn.textContent = sound;

    btn.addEventListener("click", () => {

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(`sounds/${sound}.mp3`);

        currentAudio.play();
    });

    buttonsDiv.appendChild(btn);
});

// Stop Button
const stopBtn = document.createElement("button");

stopBtn.classList.add("stop");

stopBtn.textContent = "Stop";

stopBtn.addEventListener("click", () => {

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});

buttonsDiv.appendChild(stopBtn);