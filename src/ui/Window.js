
const drawGameWindow = () => {

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
    getSize
};

export default Window;
