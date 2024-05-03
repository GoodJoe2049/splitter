import State from "../../State.mjs";

const initRender = () => {
    updateTotalEnergy();
    updateHeatBar();
    updateHeatLevel();
};

const updateTotalEnergy = () => {
    document.getElementById("total-energy-container").innerHTML = "123456789101112" + " E";
};

const updateHeatBar = () => {

};

const updateHeatLevel = () => {
    document.getElementById("heat-level-container").innerHTML = "Heat " + State.getHeatLevel();
};

const TopContainerUI = {
    initRender,
    updateTotalEnergy,
    updateHeatBar,
    updateHeatLevel,
};

export default TopContainerUI;
