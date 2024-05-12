
const drawGameWindow = () => {
    let gameContainer = document.getElementById("game-window-container");
    gameContainer.style.width = windowWidth + "px";
    gameContainer.style.height = windowHeight + "px";
};

const updateSize = () => {
    windowWidth = window.innerWidth - 20;
    windowHeight = window.innerHeight - 20;
    let canvas = document.getElementById("game-canvas");
    let area = document.getElementById("game-area");
    canvas.style.width = area.clientWidth + "px";
    canvas.style.height = area.clientHeight + "px";
    canvas.width = area.clientWidth;
    canvas.height = area.clientHeight;
};

const getWidth = () => windowWidth;

const getHeight = () => windowHeight;

const getSize = () => {
    return dimensions = {
        width: windowWidth,
        height: windowHeight
    };
};


var windowWidth;
var windowHeight;

const Window = {
    drawGameWindow,
    updateSize,
    getWidth,
    getHeight,
    getSize,
};

export default Window;
