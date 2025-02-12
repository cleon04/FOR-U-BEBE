function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

// Detect if the user is on a touch device
const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

// Use different event listeners for mobile & desktop
if (isTouchDevice) {
    moveRandom.addEventListener("touchstart", function (e) {
        moveRandomEl(e.target);
    });
} else {
    moveRandom.addEventListener("mouseenter", function (e) {
        moveRandomEl(e.target);
    });
}