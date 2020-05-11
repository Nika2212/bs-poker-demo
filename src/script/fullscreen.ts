document.getElementById("fullscreen-btn").addEventListener("click", toggleFullscreen, true);
document.addEventListener("fullscreenchange", detectFullscreen, true);
document.addEventListener("mozfullscreenchange", detectFullscreen, true);
document.addEventListener("webkitfullscreenchange", detectFullscreen, true);
document.addEventListener("msfullscreenchange", detectFullscreen, true);

function detectFullscreen() {
    if (document.fullscreenElement) {
        console.log("Fullscreen");
    } else {
        console.log("Windowed");
    }
}
function toggleFullscreen() {
    if((window.innerWidth === screen.width && window.innerHeight === screen.height)) {
        document.exitFullscreen().catch(() => document.documentElement.requestFullscreen());
    } else {
        document.documentElement.requestFullscreen().catch(() => document.exitFullscreen());
    }
}
