const triggerButtonArray = document.getElementsByClassName("popup-trigger");
let currentPopup;
const overlay = document.getElementById("overlay");

for (let i = 0; i < triggerButtonArray.length; i++) {
    triggerButtonArray[i].addEventListener("click", () => openPopup(triggerButtonArray[i].getAttribute("data-target")), true);
}

function openPopup(popupID) {
    currentPopup = document.getElementById(popupID);

    overlay.removeAttribute("hidden");
    currentPopup.removeAttribute("hidden");
    overlay.addEventListener("click", (e) => {
        if (!currentPopup.contains(e.target)) {
            closePopup();
        }
    }, {once: true});
    currentPopup.getElementsByClassName("popup-close-btn")[0].addEventListener("click", closePopup, {once: true});
}
function closePopup() {
    overlay.setAttribute("hidden", "");
    currentPopup.setAttribute("hidden", "");
}
