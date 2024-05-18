import State from "../State.mjs";
import Particle from "./Particle.mjs";

const context = document.getElementById("game-canvas").getContext("2d");
const gameArea = document.getElementById("game-area");

const addParticle = () => {
    //temp
    particles.push(new Particle(20, 20, 20, 10));
    particles.push(new Particle(40, 20, 10, 10));
};

const removeParticle = () => {

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
    removeParticle,
    loop,
    getParticles
};

export default Particles;
