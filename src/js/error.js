import { containerCard } from "./createContainer";

export const errorPage = document.querySelector(".error_page");

export function error(isData) {
    if (isData) {
        containerCard.style.display = "block";
        errorPage.style.display = "none";
    } else {
        containerCard.style.display = "none";
        errorPage.style.display = "block";
    }
}
