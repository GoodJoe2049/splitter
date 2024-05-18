import {
    MAX_LIFE_BAR,
    INITIAL,
} from "./state-constants.mjs";
import BottomContainerUI from "./ui/bottom_container/BottomContainerUI.mjs";
import TopContainerUI from "./ui/top_container/TopContainerUI.mjs";
import Particles from "./particle_engine/Particles.mjs";

const startGame = () => {
    startTick();
    //render the game screen:
    // bottom
    // game
    TopContainerUI.initRender();
    
    // set all values (life bar, heat level, etc.)
    //start particle engine
    //start audio level loop

    //temp
    Particles.addParticle();
    Particles.loop();
};

const gameOver = () => {
    stopTick();
    //store results in local storage
    //display results
    //clear results
};

const toggleGamePaused = () => {
    BottomContainerUI.togglePauseButton();
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

const getGamePaused = () => gamePaused;


var heatLevel = INITIAL.HEAT_LEVEL;
var totalEnergy = INITIAL.TOTAL_ENERGY;
var lifeBar = MAX_LIFE_BAR;
var tickIds = [];
var tickDelayMs = INITIAL.TICK_DELAY;
var gamePaused = false;

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
    getGamePaused
};

export default State;
