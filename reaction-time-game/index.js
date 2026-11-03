const target = document.getElementById("target")
const centerIcon = document.getElementById("center-icon")
const readyMessage = document.getElementById("ready-message")
const clickMessage = document.getElementById("click-message")
const lastAttempt = document.getElementById("last-attempt")
const bestThisSession = document.getElementById("best-this-session")



const targetClick = () => {
    target.style.backgroundColor = "#D9F99D";

    centerIcon.textContent = "!";
    centerIcon.style.fontSize = "48px";
    centerIcon.style.color = "black";

    readyMessage.textContent = "Click now !";
    readyMessage.style.color = "black";

    clickMessage.textContent = "Go, go, go !";
    clickMessage.style.color = "black";
}


target.addEventListener("click",targetClick)