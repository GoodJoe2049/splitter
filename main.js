
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

addEventListener("resize", (event) => {});

onresize = (event) => {
    windowWidth = window.innerWidth - 20;
    windowHeight = window.innerHeight - 20;
    drawGameWindow();
};

const drawGameWindow = () => {
    document.getElementById("game-window-container").style.width = windowWidth + "px";
    document.getElementById("game-window-container").style.height = windowHeight + "px";
};

drawGameWindow();
