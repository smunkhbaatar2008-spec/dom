const markers = document.getElementById("markers")
const numbers = document.getElementById("numbers")
const hourHand = document.getElementById("hour-hand")
const minuteHand = document.getElementById("minute-hand")
const secondHand = document.getElementById("second-hand")

for (let i = 0 ; i <60 ; i++) {
const marker = document.createElement("div");
marker.className = "absolute inset-0";
marker.style.transform = `rotate(${i * 6}deg)`;
const tick = document.createElement("span")
const tickType = i % 5 === 0 ? "w-0.5 h-3 bg-[#657666] " : "w-px h-1.5 bg-[#C9CEC1]"
tick.className = `absolute top-2.5 left-1/2 -translate-x-1/2 size-3 ${tickType} `;

marker.appendChild(tick);
markers.appendChild(marker)
}