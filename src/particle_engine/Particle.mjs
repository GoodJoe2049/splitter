import { coinflip, randomFloatBetween, randomIntBetween } from "../utils.mjs";
import State from "../State.mjs";
import { PARTICLE_SIZE } from "./particle-constants.mjs";
import Particles from "./Particles.mjs";

const canvas = document.getElementById("game-canvas");
const context = canvas.getContext("2d");

export default class Particle {
    constructor(energy, position = {}) {
        this.radius = generateRadius(energy);
        this.motion = generateMotionEquation();
        this.position = position;
        if (!Object.keys(position).length) {
            this.setRandomSpawnPosition();
        }
        this.color = generateRgbString(energy < 0);
        this.energy = energy;
    }

    draw() {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.getPositionX(), this.getPositionY(), this.radius, 0, 2 * Math.PI);
        context.fill();
    }

    update() {
        //temp code for test, mazzke a movement object to handle movement equation/pattern and speed (also percentage)
        //gonna have to normalize this for different resolutions (use percentage)
        this.updatePosition();

        if (this.isOutOfBounds()) {
            this.motion = generateMotionEquation();
            this.setRandomSpawnPosition();
            return true;
        }
    }

    setRandomSpawnPosition() { //fix spawn when motion is inadequate (or make motion after spawn)
        //spawn away from click when splitting to avoid spam splitting (and breaking the game)
        //set random spawn where particle will enter the screen
        //this is used when first generating particle and when particle goes out of bounds and needs to be reintroduced
        //if anti particle, then delete particle once out of bounds
        if (coinflip()) {
            this.position = {
                x: randomIntBetween(0, canvas.width),
                y: coinflip() ? 0 - this.radius : canvas.height + this.radius
            };
        } else {
            this.position = {
                x: coinflip() ? 0 - this.radius : canvas.width + this.radius,
                y: randomIntBetween(0, canvas.height)
            };
        }
    }

    isOutOfBounds() {
        const diameter = this.radius * 2;
        return this.getPositionX() - this.radius < -diameter
            || this.getPositionY() - this.radius < -diameter * 2
            || this.getPositionX() + this.radius > canvas.width + diameter
            || this.getPositionY() + this.radius > canvas.height + diameter;
    }

    updatePosition() {
        this.position = {
            x: this.position.x + this.motion.directionX * (this.motion.speed + generateJitter()),
            y: this.position.y + this.motion.directionY * (this.motion.speed + generateJitter())
        };
    }

    getPositionX = () => this.position.x;

    getPositionY = () => this.position.y;
}

function generateRadius(energy) { //this has to change to use percentage
    const smallestEdge = canvas.width < canvas.height ? canvas.width : canvas.height;
    let lowBound = smallestEdge * 0.05;
    if (lowBound < PARTICLE_SIZE.MINIMUM) {
        lowBound = PARTICLE_SIZE.MINIMUM;
    }
    const highBound = lowBound + State.getHeatLevel() > smallestEdge / 2 ? smallestEdge / 2 : lowBound + State.getHeatLevel();
    return randomIntBetween(lowBound, highBound + energy);
}

function generateSpeed() {
    //State.getHeatLevel() < 50 : 
    return randomFloatBetween(0.3, 1.5);
}

function generateRgbString(antiParticle) {
    return `
        rgba(
            ${randomIntBetween(200, 220)},
            ${antiParticle ? 0 : randomIntBetween(200, 255)},
            ${antiParticle ? 0 : randomIntBetween(220, 255)},
            ${antiParticle ? 1 : randomIntBetween(60, 85) / 100}
        )
    `;
}

function generateMotionEquation() {
    return {
        directionX: coinflip() ? 1 : -1,
        directionY: coinflip() ? 1 : -1,
        speed: generateSpeed(),
        scale: randomFloatBetween(1, 10)
    }
}

function generateJitter() {
    //the more particles on screen, the more jitter
    return randomFloatBetween(0, Math.min(Particles.getParticles().length / 50, 5));
}