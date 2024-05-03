import State from "../../State.mjs";

const playerClick = () => {
    State.addLifeBarBy(100); //example to remove
    //this will handle whether a particle(s) are clicked on to add the respective points
    //otherwise remove the respective amount of points (missed clicks reduce points, penalty increasing with heat)
};

const GameContainerUI = {
    playerClick,
};

export default GameContainerUI;