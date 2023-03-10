const shriftBtn = document.querySelector(".setings__shrift__btn");
const dropdownShrift = document.querySelector(".dropdown");
const dropdownList = document.querySelector(".dropdown_list");
export const body = document.body;
const shriftLocal = localStorage.getItem("shrift");

const fonstText = document.querySelector(".setings__shrift__title");

// localstorage shrift
if (shriftLocal) {
    if (shriftLocal == "Inter") {
        fonstText.innerHTML = "Sans-serif";
        font(`"Inter", sans-serif`);
    } else if (shriftLocal == "Lora") {
        font(`"Lora", serif`);
        fonstText.innerHTML = "Serif";
    } else if (shriftLocal == "Inconsolata") {
        font(`"Inconsolata", monospace`);
        fonstText.innerHTML = "Mono";
    }
}
// function
function dropdown(boleen) {
    dropdownShrift.style.display = `${boleen}`;
}
function font(font) {
    body.style.fontFamily = `${font}`;
}

shriftBtn.addEventListener("mouseover", () => {
    dropdown("block");
});
shriftBtn.addEventListener("click", () => {
    dropdown("block");
});
shriftBtn.addEventListener("mouseleave", (event) => {
    dropdown("none");
});
dropdownShrift.addEventListener("click", (e) => {
    const text = e.target.innerText,
        tag = e.target.nodeName;
    if (text == "Sans Serif" && tag == "LI") {
        shriftText(text);
        font(`"Inter", sans-serif`);
        localStorage.setItem("shrift", "Inter");
    } else if (text == "Serif" && tag == "LI") {
        font(`"Lora", serif`);
        shriftText(text);
        localStorage.setItem("shrift", "Lora");
    } else if (text == "Mono" && tag == "LI") {
        font(`"Inconsolata", monospace`);
        localStorage.setItem("shrift", "Inconsolata");
        shriftText(text);
    }
    setTimeout(() => {
        dropdown("none");
    }, 100);
});

function shriftText(text) {
    fonstText.innerHTML = text;
}
