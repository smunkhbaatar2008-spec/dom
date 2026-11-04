const target = document.getElementById("target");
const centerIcon = document.getElementById("center-icon");
const readyMessage = document.getElementById("ready-message");
const clickMessage = document.getElementById("click-message");
const lastAttempt = document.getElementById("last-attempt");
const bestThisSession = document.getElementById("best-this-session");

let state = "idle";
let timeoutId;
let startTime = 0;
let best = null;

const setWaiting = () => {
  state = "waiting";
  target.style.backgroundColor = "#650a0a";

  centerIcon.textContent = "...";
  centerIcon.style.fontSize = "48px";
  centerIcon.style.color = "white";

  readyMessage.textContent = "Wait for green";
  readyMessage.style.color = "white";

  clickMessage.textContent = "Not yet stay ready.";
  clickMessage.style.color = "white";

  let randomTime = 1000 + Math.random() * 3000;
  timeoutId = setTimeout(setReady, randomTime);
};

const setReady = () => {
  target.style.backgroundColor = "#a9d88e";
  state = "ready";
  startTime = Date.now();
  clearTimeout(timeoutId);
  centerIcon.textContent = "!";
  centerIcon.style.fontSize = "48px";
  centerIcon.style.color = "black";

  readyMessage.textContent = "Click now!";
  readyMessage.style.color = "black";

  clickMessage.textContent = "Go, go, go!";
  clickMessage.style.color = "black";
};

const toSoon = () => {
  target.style.backgroundColor = "#27272A";
  clearTimeout(timeoutId);
  centerIcon.innerHTML = `
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-rotate-cw preview-icon"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  `;
  state = "idle";
  readyMessage.textContent = "Too soon!";
  readyMessage.style.color = "white";

  clickMessage.textContent = "Click try again";
  clickMessage.style.color = "white";
};

const showResult = () => {
  const reactionTime = Date.now() - startTime;
  best = !best ? reactionTime : Math.min(reactionTime, best);
  state = "idle";
  bestThisSession.textContent = `${best} ms`;
  lastAttempt.textContent = `${reactionTime} ms`;


  target.style.backgroundColor = "#27272A";
  centerIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check preview-icon"><path d="M20 6 9 17l-5-5"/></svg>`;
  readyMessage.textContent = `${reactionTime} ms`;
  readyMessage.style.color = "white";
  clickMessage.textContent = "Click to play again";
  clickMessage.style.color = "white";
};


target.addEventListener("click", () => {
  if (state === "waiting") {
    toSoon();
  } else if (state === "ready") {
    showResult();
  } else {
    setWaiting();
  }
});
