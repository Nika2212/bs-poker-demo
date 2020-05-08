document.addEventListener("load", () => {
    if (isDevice()) {
        detectOrientation();
        window.addEventListener("orientationchange", detectOrientation, true);
    }
}, true);

function isDevice(): boolean {
    return !!(navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i));
}
function detectOrientation() {
    if (window.innerWidth > window.innerHeight) {

    } else {
        // Rotation Notification Toggle
    }
}
