import { body } from "./dropdawn";
const darkBtn = document.getElementById("mode_btn");
const mode = localStorage.getItem("darkMode");

// function
function modeDarkLigt() {
    darkBtn.classList.toggle("active");
    body.classList.toggle("darkMode");
}

if (mode) {
    modeDarkLigt();
}

darkBtn.addEventListener("click", () => {
    modeDarkLigt();

    if (body.classList.contains("darkMode")) {
        localStorage.setItem("darkMode", "darkMode");
    } else {
        localStorage.setItem("darkMode", "");
    }
});
