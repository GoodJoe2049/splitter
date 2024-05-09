import State from "../../State.mjs";

const initRender = () => {
    updateTotalEnergy();
    updateHeatBar();
    updateHeatLevel();
};

const updateTotalEnergy = () => {
    document.getElementById("total-energy-container").innerHTML = State.getTotalEnergy();
};

const updateHeatBar = () => {

};

const updateHeatLevel = () => {
    document.getElementById("heat-level-container").innerHTML = "HEAT " + State.getHeatLevel();
};

const TopContainerUI = {
    initRender,
    updateTotalEnergy,
    updateHeatBar,
    updateHeatLevel,
};

export default TopContainerUI;
