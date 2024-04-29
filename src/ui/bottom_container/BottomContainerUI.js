import State from "../../state.js";

const updateLifeUi = () => {
    let percent = State.getLifeBar().toString();
    document.getElementById("percent-whole-digits").innerHTML = percent.substring(percent.length - 2, 0);
    document.getElementById("percent-decimal-digits").innerHTML = percent.substring(percent.length, percent.length - 2);
    
    //then update healthbar
    let lifeBar = document.getElementById("life-bar");
    // let tempwidth = document.getElementById("life-bar").clientWidth; //redo this and put stuff in classes
    // tempwidth = tempwidth - Math.round(0.01 * tempwidth);
    // document.getElementById("life-bar").style.width = tempwidth + "px";
};

const BottomContainerUI = {
    updateLifeUi
};

export default BottomContainerUI;
