export async function playPhonetic(data) {
    let music;
    if (data) {
        let phoneticCout = 0;
        data.forEach((phonetics) => {
            if (phonetics.audio) {
                if (!(phoneticCout == 1)) {
                    console.log(phonetics.audio);
                    music = phonetics.audio;
                    phoneticCout++;
                }
            }
        });
    }

    if (music) {
        const phonetic = await new Audio(music);
        await phonetic.play();
    }
}
