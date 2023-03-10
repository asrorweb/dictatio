export function playPhonetic(data) {
    let music;
    if (data) {
        let phoneticCout = 0;
        data.forEach((phonetics) => {
            if (phonetics.audio) {
                if (!(phoneticCout == 1)) {
                    music = phonetics.audio;
                    phoneticCout++;
                }
            }
        });
    }

    if (music) {
        const phonetic = new Audio(music);
        console.log(phonetic);
        phonetic.play();
    }
}
