/*
 * Créer le module principal de l'application qui, lorsque le DOM est chargé, réalise les
 * différentes initialisations, puis associe le "click" sur le bouton de chargement d'une
 * galerie à l'action correspondante.
 */

 import {initGallery,loadGallery,prevG,nextG} from "./gallery.js";

 window.onload=()=> {
     initGallery("https://webetu.iutnc.univ-lorraine.fr");
     loadGallery();
     prevG();
     nextG();
 };
