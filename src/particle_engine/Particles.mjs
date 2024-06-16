import State from "../State.mjs";
import Particle from "./Particle.mjs";

const context = document.getElementById("game-canvas").getContext("2d");
const gameArea = document.getElementById("game-area");

const addParticle = (energy) => {
    particles.push(new Particle(energy));
};

const playerClick = (cursorPosition) => {
    let applyPenalty = true;
    let addParticlesAfterClick = [];
    let pIndex = 0;
    while (pIndex < particles.length) {
        if (particleIntersectsClick(particles[pIndex], cursorPosition)) {
            // if p is in the area of the click, remove it and get the energy +/-
            applyPenalty = false;

            State.modifyLifeBarBy(particles[pIndex].energy);
            if (particles[pIndex].energy > 0 && particles[pIndex].radius > 0) {
                //store the locations to generate in proper place
                addParticlesAfterClick.push(new Particle(100));
                addParticlesAfterClick.push(new Particle(100));
            }

            particles.splice(pIndex, 1);
        } else {
            pIndex++;
        }
    }
    if (applyPenalty) {
        State.missParticlePenalty();
    } else {
        for (const p of addParticlesAfterClick) {
            particles.push(p);
        }
    }
    console.log(particles);
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
    return distance < particle.radius;
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
