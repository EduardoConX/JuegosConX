const words = [
    "ACCIDENTE",
    'AGUACATE',
    "ASILO",
    "DERRAMAR",
    "ENCENDER",
    "HISTORIETA",
    "MASA",
    "PLASTICA",
    "RECORRIDO",
    "REPÚBLICA",
    "REVISTA",
];

export function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}
