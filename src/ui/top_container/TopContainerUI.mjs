import State from "../../State.mjs";

const initRender = () => {
    updateTotalEnergy();
    updateHeatBar();
    updateHeatLevel();
};

const updateTotalEnergy = () => {
    document.getElementById("total-energy-container").innerHTML = "\u{26A1}" + State.getTotalEnergy();
};

const updateHeatBar = () => {

};

const updateHeatLevel = () => {
    document.getElementById("heat-level-container").innerHTML = State.getHeatLevel() + "\u{1F525}";
};

const TopContainerUI = {
    initRender,
    updateTotalEnergy,
    updateHeatBar,
    updateHeatLevel,
};

export default TopContainerUI;
