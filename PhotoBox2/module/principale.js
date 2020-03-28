import {initG,loadG,prevG,nextG} from "./gallery.js";

window.onload=()=> {
    initG("https://webetu.iutnc.univ-lorraine.fr");
    loadG();
    prevG();
    nextG();
};
