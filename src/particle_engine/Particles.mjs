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
        let currentParticle = particles[pIndex];

        if (particleIntersectsClick(currentParticle, cursorPosition)) {
            // if p is in the area of the click, remove it and get the energy +/-
            applyPenalty = false;

            State.modifyLifeBarBy(currentParticle.energy);
            if (currentParticle.energy > 0 && currentParticle.radius > 0) {
                const newParticlesPosition = {x: currentParticle.getPositionX(), y: currentParticle.getPositionY()};
                addParticlesAfterClick.push(new Particle(Math.round(currentParticle.energy / 2), newParticlesPosition));
                addParticlesAfterClick.push(new Particle(Math.round(currentParticle.energy / 2), newParticlesPosition));
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
    if (!State.getGamePaused() && State.getGameStarted()) {
        context.fillStyle = window.getComputedStyle(gameArea).getPropertyValue('background-color');
        context.fillRect(0, 0, gameArea.clientWidth, gameArea.clientHeight);
        for (const p of particles) {
            p.draw();
            if (p.update() && p.energy < 0) {
                particles.splice(particles.indexOf(p), 1);
            }
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
