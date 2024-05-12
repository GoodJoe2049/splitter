import Window from "./ui/Window.mjs";
import State from "./State.mjs";
import GameContainerUI from "./ui/game_container/GameContainerUI.mjs";

addEventListener("resize", (event) => {});

onresize = (event) => {
    Window.updateSize();
    Window.drawGameWindow();
};

let gameCanvas = document.querySelector("canvas");
gameCanvas.addEventListener("click", GameContainerUI.playerClick);

window.addEventListener("keydown", (e) => {
    if (['z', 'x'].includes(e.key)) { //will make keybinds customizable later
        GameContainerUI.playerClick();
    } else if (e.key === ' ') {
        State.toggleGamePaused();
    }
});

document.getElementById("pause-button-container").addEventListener("click", State.toggleGamePaused);

onresize();
State.startGame();
