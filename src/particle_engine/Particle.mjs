import { randomIntBetween } from "../utils.mjs";

const context = document.getElementById("game-canvas").getContext("2d");

export default class Particle {
    constructor(x, y, size, energy) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = {
            red: randomIntBetween(200, 255),
            green: randomIntBetween(200, 255),
            blue: randomIntBetween(220, 255),
            opacity: 1
        }
        this.energy = energy;
    }

    draw() {
        context.beginPath();
        context.fillStyle = this.getRgbString();
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        context.fill();
    }

    update() {
        //temp code for test
        this.x++;
        this.y++;
    }

    getRgbString() {
        return `rgba(${this.color.red}, ${this.color.green}, ${this.color.blue}, ${this.color.opacity})`;
    }
}
