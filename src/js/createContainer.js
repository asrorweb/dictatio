import { API } from "./api";
import { playPhonetic } from "./phoneticAudio";
import { fetchApi } from "./request";
import { synonymsBtn } from "./synonms";

export const containerCard = document.querySelector(".content_box");

export function createContainer(data) {
    console.log(data);
    containerCard.innerHTML = "";
    const { word, phonetic, sourceUrls, meanings, phonetics } = data;

    containerCard.innerHTML = `
    <div class="content_box">
        <div class="request_result_box">
            <div class="result__content">
                <h1 class="rezult__title">${word}</h1>
                <p class="rezult__description"></p>
            </div>
            <div class="play">
            <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0V21L21 10.5L0 0Z"
                    fill="#A445ED"
                />
            </svg>
        </div>
    </div>

    <!-- noun box -->
    <div class="noun_box">
        <h3 class="noun information_title">noun</h3>
        <hr class="noun_line" />
    </div>

    <!-- noun info -->
    <div class="noun_info information">
        <h3 class="noun_info_title information_des">Meaning</h3>
        <ul class="noun_info_card"></ul>
    </div>
    <div class="synonyms">
        <h3 class="synonyms_title">Synonyms</h3>
        <ul class="synonyms__list"></ul>
    </div>

    <!-- verb box -->
    <div class="noun_box">
        <h3 class="noun information_title">verb</h3>
        <hr class="noun_line" />
    </div>

    <!-- verb info -->
    <div class="noun_info information">
        <h3 class="noun_info_title information_des">Meaning</h3>
        <ul class="noun_info_list">
          
        </ul>
    </div>

    <hr class="verb_line noun_line" />

    <div class="source">
        <h4 class="source_title">Source</h4>
        <div class="source_box">
            <a
                target="_blank"
                href="${sourceUrls}"
                class="link"
                >${sourceUrls}
                <span>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.09091 4.29547C6.50512 4.29547 6.84091 3.95968 6.84091 3.54547C6.84091 3.13125 6.50512 2.79547 6.09091 2.79547V4.29547ZM1.42603 3.97149L1.95635 4.50183L1.95637 4.50182L1.42603 3.97149ZM1.42603 12.574L1.95638 12.0437L1.95637 12.0437L1.42603 12.574ZM11.2045 7.9091C11.2045 7.49489 10.8688 7.1591 10.4545 7.1591C10.0403 7.1591 9.70455 7.49489 9.70455 7.9091H11.2045ZM4.83331 8.10604C4.54041 8.39894 4.54041 8.87381 4.83331 9.16671C5.1262 9.4596 5.60107 9.4596 5.89397 9.16671L4.83331 8.10604ZM13.1667 1.89398C13.4596 1.60108 13.4596 1.12621 13.1667 0.833317C12.8738 0.540424 12.3989 0.540424 12.106 0.833317L13.1667 1.89398ZM12.6364 2.11365C13.0506 2.11365 13.3864 1.77786 13.3864 1.36365C13.3864 0.949434 13.0506 0.613647 12.6364 0.613647V2.11365ZM9 0.613647C8.58579 0.613647 8.25 0.949434 8.25 1.36365C8.25 1.77786 8.58579 2.11365 9 2.11365V0.613647ZM13.3864 1.36365C13.3864 0.949434 13.0506 0.613647 12.6364 0.613647C12.2221 0.613647 11.8864 0.949434 11.8864 1.36365H13.3864ZM11.8864 5.00001C11.8864 5.41422 12.2221 5.75001 12.6364 5.75001C13.0506 5.75001 13.3864 5.41422 13.3864 5.00001H11.8864ZM6.09091 2.79547H2.45455V4.29547H6.09091V2.79547ZM2.45455 2.79547C1.86987 2.79547 1.30913 3.02772 0.895692 3.44117L1.95637 4.50182C2.08849 4.36969 2.26769 4.29547 2.45455 4.29547V2.79547ZM0.895706 3.44116C0.482259 3.85459 0.25 4.41533 0.25 5.00001H1.75C1.75 4.81315 1.82423 4.63395 1.95635 4.50183L0.895706 3.44116ZM0.25 5.00001V11.5455H1.75V5.00001H0.25ZM0.25 11.5455C0.25 12.1301 0.482269 12.6909 0.895685 13.1043L1.95637 12.0437C1.82422 11.9115 1.75 11.7323 1.75 11.5455H0.25ZM0.895678 13.1043C1.30913 13.5178 1.86988 13.75 2.45455 13.75V12.25C2.26768 12.25 2.08849 12.1758 1.95638 12.0437L0.895678 13.1043ZM2.45455 13.75H9V12.25H2.45455V13.75ZM9 13.75C9.58466 13.75 10.1454 13.5178 10.5588 13.1043L9.49818 12.0436C9.36603 12.1758 9.18683 12.25 9 12.25V13.75ZM10.5588 13.1043C10.9723 12.6909 11.2045 12.1301 11.2045 11.5455H9.70455C9.70455 11.7323 9.63033 11.9115 9.49818 12.0436L10.5588 13.1043ZM11.2045 11.5455V7.9091H9.70455V11.5455H11.2045ZM5.89397 9.16671L13.1667 1.89398L12.106 0.833317L4.83331 8.10604L5.89397 9.16671ZM12.6364 0.613647H9V2.11365H12.6364V0.613647ZM11.8864 1.36365V5.00001H13.3864V1.36365H11.8864Z"
                            fill="#757575"
                        />
                    </svg> </span
                ></a>
            </div>
        </div>
    </div>     
    `;

    // text
    let phoneticText = document.querySelector(".rezult__description");
    if (data.phonetics) {
        let phoneticCout = 0;
        data.phonetics.forEach((phonetics) => {
            if (phonetics.text) {
                if (!(phoneticCout == 1)) {
                    console.log(phonetics.text);
                    phoneticText.innerHTML = phonetics.text;
                    phoneticCout++;
                }
            }
        });
    }

    document.querySelector(".play").addEventListener("click", () => {
        playPhonetic(data.phonetics);
    });

    // synonyms list
    let synonymsList = document.querySelector(".synonyms__list");

    let verbloc = true;
    if (data.meanings[0].partOfSpeech == "noun") {
        // definitions
        let nounList = document.querySelector(".noun_info_card");
        let limitNounInfo = true;

        // synonyms
        data.meanings[0].synonyms.forEach((syn) => {
            let synonymItem = document.createElement("li");
            synonymItem.className = "synonyms_word ";
            synonymItem.innerHTML = syn;
            synonymsList.appendChild(synonymItem);
        });

        // definition
        data.meanings[0].definitions.forEach((element, index) => {
            if (limitNounInfo) {
                if (!(index == 3)) {
                    let itme = document.createElement("li");
                    itme.classList.add("information_item");
                    itme.innerHTML = element.definition;
                    nounList.appendChild(itme);
                } else {
                    limitNounInfo = false;
                }
            }
        });
    } else if (data.meanings[0].partOfSpeech == "verb") {
        let verbList = document.querySelector(".noun_info_list");
        let limitVerbInfo = true;

        // synonyms
        data.meanings[0].synonyms.forEach((syn) => {
            let synonymItem = document.createElement("li");
            synonymItem.className = "synonyms_word";
            synonymItem.innerHTML = syn;
            synonymsList.appendChild(synonymItem);
        });

        // definition
        if (data.meanings[0].definitions) {
            data.meanings[0].definitions.forEach((element, index) => {
                if (limitVerbInfo) {
                    if (!(index == 2)) {
                        if (element.example) {
                            let itme = document.createElement("li");
                            let verbDes = document.createElement("p");
                            itme.classList.add("information_item");
                            verbDes.classList.add("verb_des");
                            verbDes.innerHTML = element.example;
                            itme.innerHTML = element.definition;
                            verbList.appendChild(itme);
                            verbList.appendChild(verbDes);
                        } else {
                            let itme = document.createElement("li");
                            itme.classList.add("information_item");
                            itme.innerHTML = element.definition;
                            verbList.appendChild(itme);
                        }
                    } else {
                        limitVerbInfo = false;
                    }
                    verbloc = false;
                }
            });
        }
    }

    if (verbloc) {
        let verbList = document.querySelector(".noun_info_list");
        let limitVerbInfo = true;
        if (data.meanings[1].definitions) {
            data.meanings[1].definitions.forEach((element, index) => {
                if (limitVerbInfo) {
                    if (!(index == 2)) {
                        if (element.example) {
                            let itme = document.createElement("li");
                            let verbDes = document.createElement("p");
                            itme.classList.add("information_item");
                            verbDes.classList.add("verb_des");
                            verbDes.innerHTML = element.example;
                            itme.innerHTML = element.definition;
                            verbList.appendChild(itme);
                            verbList.appendChild(verbDes);
                        } else {
                            let itme = document.createElement("li");
                            itme.classList.add("information_item");
                            itme.innerHTML = element.definition;
                            verbList.appendChild(itme);
                        }
                    } else {
                        limitVerbInfo = false;
                    }
                }
            });
        }
    }

    synonymsBtn(synonymsList);
}
