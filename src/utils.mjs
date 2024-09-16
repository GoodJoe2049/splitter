
export function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export function randomFloatBetween(min, max) {
    return Math.random() * (max - min) + min;
}

export function coinflip() {
    return randomIntBetween(0, 1) > 0;
}