import State from "../State.mjs";
import Particle from "./Particle.mjs";

const context = document.getElementById("game-canvas").getContext("2d");
const gameArea = document.getElementById("game-area");

const addParticle = (energy) => {
    particles.push(new Particle(energy));
};

const playerClick = (cursorPosition) => {
    let applyPenalty = true;
    for (const p of particles) {
        if (particleIntersectsClick(p, cursorPosition)) {
            // if p is in the area of the click, remove it and get the energy +/-
            applyPenalty = false;

            State.modifyLifeBarBy(p.energy);
            if (p.energy < 0) {
                //anti particle, don't perform a split
            } else if ('particle big enough') {
                //normal particle, perform split if particle big enough
                addParticle(100);
                addParticle(100);
            }

            particles.splice(particles.indexOf(p), 1);
            console.log(particles)
        }
    }
    if (applyPenalty) {
        State.missParticlePenalty();
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

const particleIntersectsClick = (particle, cursorPosition) => {
    const distance = Math.sqrt(
        Math.pow(particle.getPositionX() - cursorPosition.x, 2) + Math.pow(particle.getPositionY() - cursorPosition.y, 2)
    );
    return distance < particle.size;
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
