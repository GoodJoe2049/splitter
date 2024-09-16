import TRACK_LIST from "./track-list.mjs";
import State from "../State.mjs";

//https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
//https://infiniteafternoon.com/
//https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loop

let currentTrack = 0;

const start = () => {
    // TRACK_LIST[0].addEventListener('timeupdate', (e) => {
    //     console.log('timeupdate')
    // });
    // TRACK_LIST[0].play();
    //const response = await fetch("rnb-lofi-melody-loop.wav")
    let audioContext = new AudioContext();
    let source = audioContext.createBufferSource();
    source.connect(audioContext.destination);
    TRACK_LIST[0].play();
};



const MusicEngine = {
    start
};

export default MusicEngine;