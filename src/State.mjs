import {
    MAX_LIFE_BAR,
    STARTING_TICK_DELAY,
} from "./state-constants.mjs";
import BottomContainerUI from "./ui/bottom_container/BottomContainerUI.mjs";
import TopContainerUI from "./ui/top_container/TopContainerUI.mjs";

const startGame = () => {
    startTick();
    //render the game screen:
    // bottom
    // game
    TopContainerUI.initRender();
    
    // set all values (life bar, heat level, etc.)
    //start particle engine
    //start audio level loop
};

const gameOver = () => {
    stopTick();
};

const toggleGamePaused = () => {
    gamePaused = !gamePaused; 
};

const startTick = () => {
    tickIds.push(
        setInterval(function() {
            if (!gamePaused){
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
    TopContainerUI.updateHeatLevel();
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
    if (gamePaused) {
        return;
    }

    if (lifeBar + amount > MAX_LIFE_BAR) {
        lifeBar = MAX_LIFE_BAR;
    } else {
        lifeBar += amount;
    }
    BottomContainerUI.updateLifePercentAndBar();
    increaseTotalEnergyBy(amount);
    TopContainerUI.updateTotalEnergy();
};

const subLifeBarBy = (amount) => {
    if (gamePaused) {
        return;
    }

    if (amount >= lifeBar) {
        lifeBar = 0;
        gameOver();
    } else {
        lifeBar -= amount;
    }
    BottomContainerUI.updateLifePercentAndBar();
};

const missParticlePenalty = () => {
    subLifeBarBy(heatLevel * 100);
};

const getPassiveEnergyLoss = () => {
    return heatLevel; //this is gonna be different
};

const getHeatLevel = () => heatLevel;

const getTotalEnergy = () => totalEnergy;

const getLifeBar = () => lifeBar;


var heatLevel = 1;      //the difficulty level
var totalEnergy = 0;    //energy generated through the entire run
var lifeBar = MAX_LIFE_BAR;    //current energy to stay alive
var tickIds = [];
var tickDelayMs = STARTING_TICK_DELAY;
var gamePaused = false;
var tickPaused = false;

const State = {
    startGame,
    gameOver,
    toggleGamePaused,
    getHeatLevel,
    raiseHeatLevel,
    getTotalEnergy,
    getLifeBar,
    addLifeBarBy,
    subLifeBarBy,
    missParticlePenalty,
    getPassiveEnergyLoss,
};

export default State;
