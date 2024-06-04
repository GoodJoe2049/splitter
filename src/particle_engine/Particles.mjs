import State from "../State.mjs";
import Particle from "./Particle.mjs";

const context = document.getElementById("game-canvas").getContext("2d");
const gameArea = document.getElementById("game-area");

const addParticle = () => {
    particles.push(new Particle());
};

const playerClick = (cursorPosition) => {
    //this will handle whether a particle(s) are clicked on to add the respective points
    //otherwise remove the respective amount of points (missed clicks reduce points, penalty increasing with heat)
    console.log(cursorPosition);
    for (const p of particles) {
        // if p is in the area of the click, remove it and get the energy +/-
    
        State.addLifeBarBy(55); //example to remove
    }
};

const loop = () => {
    if (!State.getGamePaused()) {
        context.fillStyle = window.getComputedStyle(gameArea).getPropertyValue('background-color');
        context.fillRect(0, 0, gameArea.clientWidth, gameArea.clientHeight);
        for (const p of particles) {
            p.draw();
            p.update();
        }
    }
    requestAnimationFrame(loop);
};

const particles = [];

const getParticles = () => particles;

const Particles = {
    addParticle,
    playerClick,
    loop,
    getParticles
};

export default Particles;
