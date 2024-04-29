import State from "../../state.js";

const updateLifeUi = () => {
    let percent = State.getLifeBar();
    document.getElementById("percent-whole-digits").innerHTML = percent.toString().substring(2,0); //needs dynamic check for less than 4 digits present
    document.getElementById("percent-decimal-digits").innerHTML = percent.toString().substring(5,2);
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
