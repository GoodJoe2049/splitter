import { randomIntBetween } from "../utils.mjs";
import State from "../State.mjs";

const canvas = document.getElementById("game-canvas");
const context = canvas.getContext("2d");

export default class Particle {
    constructor(energy) {
        this.size = generateSize(); //normalize size relative to the smallest dimension (width v height) and randomize
        this.speed = '';
        this.position = {};
        this.setRandomSpawnPosition();
        this.color = generateRgbString(energy < 0);
        this.energy = energy;
        this.movement = 'movement object with random motion equation';
    }

    draw() {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.getPositionX(), this.getPositionY(), this.size, 0, 2 * Math.PI);
        context.fill();
    }

    update() {
        //temp code for test, make a movement object to handle movement equation/pattern and speed (also percentage)
        //gonna have to normalize this for different resolutions (use percentage)
        this.position.x = this.position.x + 0.7;
        this.position.y = this.position.y + 0.7;
    }

    setRandomSpawnPosition() {
        //set random spawn where particle will enter the screen
        //this is used when first generating particle and when particle goes out of bounds and needs to be reintroduced
        //if anti particle, then delete particle once out of bounds
        this.position = {x: 0, y: 0};
    }

    getPositionX = () => this.position.x;

    getPositionY = () => this.position.y;
}

function generateSize() {
    const smallestEdge = canvas.width < canvas.height ? canvas.width : canvas.height;
    const lowBound = smallestEdge * 0.05;
    const highBound = lowBound + State.getHeatLevel() > smallestEdge / 2 ? smallestEdge / 2 : lowBound + State.getHeatLevel();
    return randomIntBetween(lowBound, highBound);
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
