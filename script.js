const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];

const buttonsDiv = document.getElementById("buttons");

let audio = document.createElement("audio");
document.body.appendChild(audio);

sounds.forEach((sound) => {
    const btn = document.createElement("button");

    btn.innerText = sound;
    btn.classList.add("btn");

    btn.addEventListener("click", () => {

        audio.pause();
        audio.currentTime = 0;

        audio.src = `sounds/${sound}.mp3`;
        audio.play();
    });

    buttonsDiv.appendChild(btn);
});

// stop button
const stopBtn = document.createElement("button");

stopBtn.innerText = "stop";
stopBtn.classList.add("stop");

stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
});

buttonsDiv.appendChild(stopBtn);
