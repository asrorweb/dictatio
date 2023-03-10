import { API } from "./api";
import { fetchApi } from "./request";
import { createContainer } from "./createContainer";

export function synonymsBtn(syn) {
    syn.addEventListener("click", (e) => {
        if (e.target.nodeName == "LI") {
            fetchApi(`${API}${e.target.innerHTML}`)
                .then((data) => {
                    createContainer(data);
                    console.log(data);
                })
                .catch((err) => {
                    console.log("log", err);
                });
        }
    });
}
