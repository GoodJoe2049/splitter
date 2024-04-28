
const raiseHeatLevel = () => {
    heatLevel++;
};

const increaseTotalEnergyBy = (positiveAmount) => {
    totalEnergy += positiveAmount;
};

const updateLifeBarBy = (amount) => {
    lifeBar += amount;
};

const getPassiveEnergyLoss = () => {
    return heatLevel; //might need to tweak loss equation
};

const getHeatLevel = () => heatLevel;

const getTotalEnergy = () => totalEnergy;

const getLifeBar = () => lifeBar;


var heatLevel = 0;      //the difficulty level
var totalEnergy = 0;    //energy generated through the entire run
var lifeBar = 10000;    //current energy to stay alive

const State = {
    getHeatLevel,
    raiseHeatLevel,
    getTotalEnergy,
    increaseTotalEnergyBy,
    getLifeBar,
    updateLifeBarBy,
    getPassiveEnergyLoss,
};

export default State;
