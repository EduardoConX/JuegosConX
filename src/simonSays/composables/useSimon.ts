import { ref } from "vue";
const game = ref<string[]>([]);
const playerChoices = ref<string[]>([]);
const level = ref(1);
const message = ref("Level ");
const buttonText = ref("New Game");
const shakeGreen = ref(false);
const shakeRed = ref(false);
const shakeYellow = ref(false);
const shakeBlue = ref(false);
const hasLose = ref(false);

const colors = ["green", "red", "yellow", "blue"];

const newGame = () => {
  buttonText.value = "Restart Game";
  game.value = [];
  playerChoices.value = [];
  level.value = 1;
  hasLose.value = false;
  message.value = "Level ";

  setTimeout(() => {
    nextColor();
  }, 1000);
};

const nextColor = () => {
  const index = Math.floor(Math.random() * 4);
  const color = colors[index];
  play(color);
  game.value.push(color);
};

const play = (color: string) => {
  shakeGreen.value = color === colors[0];
  shakeRed.value = color === colors[1];
  shakeYellow.value = color === colors[2];
  shakeBlue.value = color === colors[3];
  const sound = new Audio(`./simon/${color}.mp3`);
  sound.play();
  setTimeout(() => resetClasses(), 1000);
};

const giveAnswer = (color: string) => {
  playerChoices.value.push(color);
  play(color);
  checkAnswer(playerChoices.value.length - 1);
};

const checkAnswer = (index: number) => {
  if (game.value[index] === playerChoices.value[index]) {
    if (index === game.value.length - 1) {
      playerChoices.value = [];
      level.value = level.value + 1;
      setTimeout(() => {
        nextColor();
      }, 2000);
    }
  } else {
    message.value = "Game over, congratulations you reached level ";
    buttonText.value = "Play Again";
    hasLose.value = true;
    const sound = new Audio("./simon/wrong.mp3");
    sound.play();
    setTimeout(() => (hasLose.value = false), 1000);
  }
};

const resetClasses = () => {
  shakeGreen.value = false;
  shakeRed.value = false;
  shakeYellow.value = false;
  shakeBlue.value = false;
};

const useSimon = () => {
  return {
    message,
    level,
    hasLose,
    buttonText,
    shakeGreen,
    shakeRed,
    shakeYellow,
    shakeBlue,
    newGame,
    giveAnswer,
  };
};

export default useSimon;
