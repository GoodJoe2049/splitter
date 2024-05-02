import Window from "./ui/Window.mjs";
import State from "./State.mjs";

addEventListener("resize", (event) => {});

onresize = (event) => {
    Window.updateSize(); //size not updating for some reason
    drawGameWindow(); //move this to window too
};

const drawGameWindow = () => {
    document.getElementById("game-window-container").style.width = Window.getWidth() + "px";
    document.getElementById("game-window-container").style.height = Window.getHeight() + "px";
};

onresize();
drawGameWindow();
State.startGame();
