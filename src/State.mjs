import {
    MAX_LIFE_BAR,
} from "./state-constants.mjs";
import BottomContainerUI from "./ui/bottom_container/BottomContainerUI.mjs";

const startGame = () => {
    startTick();
    //render the game screen

};

const gameOver = () => {
    stopTick();
};

const pauseGame = () => {

};

const resumeGame = () => {

};

const startTick = () => {
    tickIds.push(
        setInterval(function() {
            if (!tickPaused){
                subLifeBarBy(getPassiveEnergyLoss());
            }
        }, tickDelayMs)
    );
};

const stopTick = () => {
    tickIds.forEach(id => {
        clearInterval(id);
    });
};

const raiseHeatLevel = () => {
    heatLevel++;
    // if heat level at a certain place:
    // pause ticks
    // activate loading screen for next heat level
    // play relevant music
    // update tick amount and delay accordingly
};

const increaseTotalEnergyBy = (positiveAmount) => {
    totalEnergy += positiveAmount;
};

const addLifeBarBy = (amount) => {
    if (lifeBar + amount > MAX_LIFE_BAR) {
        lifeBar = MAX_LIFE_BAR;
    } else {
        lifeBar += amount;
    }
    BottomContainerUI.updateLifeUi();
    increaseTotalEnergyBy(amount);
};

const subLifeBarBy = (amount) => {
    if (amount >= lifeBar) {
        lifeBar = 0;
        gameOver();
    } else {
        lifeBar -= amount;
    }
    BottomContainerUI.updateLifeUi();
};

const getPassiveEnergyLoss = () => {
    return heatLevel; //this is gonna be different
};

const getHeatLevel = () => heatLevel;

const getTotalEnergy = () => totalEnergy;

const getLifeBar = () => lifeBar;


var heatLevel = 1;      //the difficulty level
//var passive energy loss?
var totalEnergy = 0;    //energy generated through the entire run
var lifeBar = MAX_LIFE_BAR;    //current energy to stay alive
var tickIds = [];
var tickDelayMs = 1;
var paused = false;
var tickPaused = false;

const State = {
    startGame,
    gameOver,
    getHeatLevel,
    raiseHeatLevel,
    getTotalEnergy,
    getLifeBar,
    addLifeBarBy,
    subLifeBarBy,
    getPassiveEnergyLoss
};

export default State;
