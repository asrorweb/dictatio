import { fetchApi } from "./request";
import { createContainer } from "./createContainer";
import { API } from "./api";
import { error } from "./error";

const form = document.querySelector(".form");
const input = document.querySelector(".input");

window.addEventListener("load", () => {
    let word = localStorage.getItem("word");
    if (word) {
        fetchApi(`${API}${word}`)
            .then((data) => {
                createContainer(data);
            })
            .catch((err) => {
                console.log("log", err);
            });
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = input.value.trim();
    if (value.length == 0) {
        localStorage.setItem("word", "");
        let warning = document.querySelector(".input_warning_typing");
        warning.style.display = "block";
        setTimeout(() => {
            warning.style.display = "none";
        }, 1000);
    } else {
        fetchApi(`${API}${value}`)
            .then((data) => {
                localStorage.setItem("word", `${value}`);
                createContainer(data);
                error(true);
            })
            .catch((err) => {
                localStorage.setItem("word", ``);
                error(false);
                console.log("log", err);
            });
    }
});
