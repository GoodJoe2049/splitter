import State from "../../State.mjs";
import { MAX_LIFE_BAR } from "../../state-constants.mjs";

const updateLifeUi = () => {
    updatePercentage();
    updateLifeBar();
};

const updatePercentage = () => {
    let percent = State.getLifeBar().toString();
    document.getElementById("percent-whole-digits").innerHTML = percent.substring(percent.length - 2, 0);
    document.getElementById("percent-decimal-digits").innerHTML = percent.substring(percent.length, percent.length - 2);
};

const updateLifeBar = () => {
    let lifeBar = document.getElementById("life-bar");
    lifeBar.style.width = (State.getLifeBar() / MAX_LIFE_BAR) * 100 + "%";
};

const BottomContainerUI = {
    updateLifeUi,
};

export default BottomContainerUI;
