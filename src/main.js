import Window from "./ui/window.js";

addEventListener("resize", (event) => {});

onresize = (event) => {
    Window.updateSize(); //size not updating for some reason
    drawGameWindow(); //move this to window too
};

const drawGameWindow = () => {
    document.getElementById("game-window-container").style.width = Window.getWidth() + "px";
    document.getElementById("game-window-container").style.height = Window.getHeight() + "px";
};

const startGame = () => {
    setInterval(function(){
        let tempwidth = document.getElementById("life-bar").clientWidth; //redo this and put stuff in classes
        tempwidth = tempwidth - Math.round(0.01 * tempwidth);
        console.log(tempwidth);
        document.getElementById("life-bar").style.width = tempwidth + "px";
    }, 100);
};

onresize();
drawGameWindow();
startGame();
