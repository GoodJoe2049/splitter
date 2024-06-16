import { randomIntBetween } from "../utils.mjs";
import State from "../State.mjs";

const canvas = document.getElementById("game-canvas");
const context = canvas.getContext("2d");

export default class Particle {
    constructor(energy, position = {}) {
        this.radius = generateRadius(); //normalize size relative to the smallest dimension (width v height) and randomize
        this.position = position;
        if (!Object.keys(position).length) {
            this.setRandomSpawnPosition();
        }
        this.color = generateRgbString(energy < 0);
        this.energy = energy;
        this.motion = 'movement object with random motion equation and speed';
    }

    draw() {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.getPositionX(), this.getPositionY(), this.radius, 0, 2 * Math.PI);
        context.fill();
    }

    update() {
        //temp code for test, make a movement object to handle movement equation/pattern and speed (also percentage)
        //gonna have to normalize this for different resolutions (use percentage)
        this.position.x = this.position.x + 0.7;
        this.position.y = this.position.y + 0.7;

        if (this.isOutOfBounds()) {
            this.setRandomSpawnPosition();
        }
    }

    setRandomSpawnPosition() {
        //set random spawn where particle will enter the screen
        //this is used when first generating particle and when particle goes out of bounds and needs to be reintroduced
        //if anti particle, then delete particle once out of bounds
        this.position = {x: 0, y: 0};
    }

    isOutOfBounds() {
        const diameter = this.radius * 2;
        return this.getPositionX() - this.radius < -diameter
            || this.getPositionY() - this.radius < -diameter * 2
            || this.getPositionX() + this.radius > canvas.width + diameter
            || this.getPositionY() + this.radius > canvas.height + diameter;
    }

    getPositionX = () => this.position.x;

    getPositionY = () => this.position.y;
}

function generateRadius() {
    const smallestEdge = canvas.width < canvas.height ? canvas.width : canvas.height;
    const lowBound = smallestEdge * 0.05;
    const highBound = lowBound + State.getHeatLevel() > smallestEdge / 2 ? smallestEdge / 2 : lowBound + State.getHeatLevel();
    return randomIntBetween(lowBound, highBound);
}

function generateSpeed() {
    //State.getHeatLevel() < 50 : 
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
