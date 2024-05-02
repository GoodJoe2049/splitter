
const drawGameWindow = () => {
    let gameContainer = document.getElementById("game-window-container");
    gameContainer.style.width = windowWidth + "px";
    gameContainer.style.height = windowHeight + "px";
};

const updateSize = () => {
    windowWidth = window.innerWidth - 20;
    windowHeight = window.innerHeight - 20;
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
