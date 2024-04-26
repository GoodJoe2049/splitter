
var windowWidth;
var windowHeight;

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
