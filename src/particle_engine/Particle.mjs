import { randomIntBetween } from "../utils.mjs";
import State from "../State.mjs";

const canvas = document.getElementById("game-canvas");
const context = canvas.getContext("2d");

export default class Particle {
    constructor() {
        this.size = generateSize(); //normalize size relative to the smallest dimension (width v height) and randomize
        this.speed = '';
        this.x = 0; //randomize starting position
        this.y = 0;
        this.color = generateRgbString();
        this.energy = generateEnergy();
        this.movement = 'movement object with random motion equation';
    }

    draw() {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        context.fill();
    }

    update() {
        //temp code for test, make a movement object to handle movement equation/pattern and speed (also percentage)
        //gonna have to normalize this for different resolutions (use percentage)
        this.x = this.x + 0.7;
        this.y = this.y + 0.7;
    }
}

function generateSize() {
    const smallestEdge = canvas.width < canvas.height ? canvas.width : canvas.height;
    const lowBound = smallestEdge * 0.1;
    const highBound = lowBound + State.getHeatLevel() > smallestEdge / 2 ? smallestEdge / 2 : lowBound + State.getHeatLevel();
    return randomIntBetween(lowBound, highBound);
}

function generateStartingPosition() {

}

function generateRgbString() {
    return `
        rgba(
            ${randomIntBetween(200, 220)},
            ${randomIntBetween(200, 255)},
            ${randomIntBetween(220, 255)},
            ${randomIntBetween(60, 85) / 100}
        )
    `;
}

function generateEnergy() {
    return 
}

function getOpacityBySize(size) {
    const smallestEdge = canvas.width < canvas.height ? canvas.width : canvas.height;
    return smallestEdge / 50 / size;
}
