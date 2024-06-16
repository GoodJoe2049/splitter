import Window from "./ui/Window.mjs";
import State from "./State.mjs";
import Particles from "./particle_engine/Particles.mjs";

const cursorPosition = {x: 0, y: 0};
const gameCanvas = document.getElementById("game-canvas");
var rect = gameCanvas.getBoundingClientRect();

gameCanvas.addEventListener("click", (e) => playerClick(e));

onmousemove = (e) => {
    cursorPosition.x = e.clientX - rect.left;
    cursorPosition.y = e.clientY - rect.top;
}

addEventListener("resize", (event) => {});

onresize = (event) => {
    Window.updateSize();
    Window.drawGameWindow();
    rect = gameCanvas.getBoundingClientRect();
};

window.addEventListener("keydown", (e) => {
    if (['z', 'x'].includes(e.key)) { //will make keybinds customizable later
        playerClick(e);
    } else if (e.key === ' ') {
        State.toggleGamePaused();
    }

    //temp
    if (e.key == 's') {
        startGame();
    }
});

document.getElementById("pause-button-container").addEventListener("click", State.toggleGamePaused);
onresize();

function startGame() {
    onresize();
    State.startGame();
}

startGame();//temp

function playerClick(event) {
    if (State.getGamePaused() || !State.getGameStarted()) {
        return;
    }
    if (event.clientX) {
        Particles.playerClick({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        });
    } else if (
        cursorPosition.x >= 0
            && cursorPosition.y >= 0
            && cursorPosition.x < rect.width
            && cursorPosition.y < rect.height
    ) {
        Particles.playerClick({
            x: cursorPosition.x,
            y: cursorPosition.y
        });
    }
}
