interface Drum {
    letter: string;
    drum: string;
}

const drums = <Drum[]>[
    { letter: 'W', drum: 'crash' },
    { letter: 'A', drum: 'kick' },
    { letter: 'S', drum: 'snare' },
    { letter: 'D', drum: 'tom1' },
    { letter: 'J', drum: 'tom2' },
    { letter: 'K', drum: 'tom3' },
    { letter: 'L', drum: 'tom4' },
];

const play = (letter: string) => {
    letter = letter.toUpperCase();
    const drum = drums.find((drum) => drum.letter === letter);
    if (drum) {
        const sound = new Audio(`./assets/sounds/${drum.drum}.mp3`)
        sound.play();
    }
}

const useDrums = () => {
    return {
        drums,
        play
    }
}

export default useDrums;