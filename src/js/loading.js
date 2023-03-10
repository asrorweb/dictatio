export function loading(isData) {
    let loadingImg = document.querySelector(".loading");

    if (isData) {
        loadingImg.style.display = "none";
    } else {
        loadingImg.style.display = "block";
    }
}
