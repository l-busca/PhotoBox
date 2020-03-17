import {load,init} from "./photoloader.js";
import {afficherLightbox,changerImage} from "./lightbox.js";

let id;
let prev;
let next;
let current;

/*
 * stocke les paramètres de configuration :
 * notamment identifiant de la galerie …
 */
 export function initGallery(url){
     init(url)
 }

/* une méthode de chargement des données et insertion de la galerie dans le
 * dom ; cette méthode utilise le module photoloader pour charger les données,
 * et transmet ces données à une fonction privée qui génère et insère le dom
 * correspondant à la galerie.
 */
 export function loadGallery() {
    $("#load_gallery").on("click",() => load("/www/canals5/photobox/photos/?offset=0&size=12").then(e=>{

        prev = e.data.links.last.href;
        next = e.data.links.next.href;
        editDom(e)
    }));

}


export function editDom(tabl) {
    let gallery = document.querySelector('#photobox-gallery');
    $(".vignette").remove();
    tabl.data.photos.forEach(e=>{
        let div = document.createElement("div");
        div.setAttribute('class','vignette');

        let img = document.createElement("img");
        img.setAttribute('src',"https://webetu.iutnc.univ-lorraine.fr/"+e.photo.thumbnail.href);
        img.setAttribute('data-uri',"https://webetu.iutnc.univ-lorraine.fr"+e.photo.id);
        img.setAttribute('data-img',"https://webetu.iutnc.univ-lorraine.fr"+e.photo.original.href);
        img.setAttribute('titre',e.photo.titre);
        let div2 = document.createElement("div");
        div2.appendChild(document.createTextNode(e.photo.titre));
        div.appendChild(img);
        div.appendChild(div2);
        gallery.appendChild(div);
    });
    $(".vignette").on("click",(e) => afficherLightbox(e.target));

}


export function prevG(){
    $("#previous").on("click",()=>load(prev).then(e=>{
        if(current === e.data.links.first.href){
            current = e.data.links.last.href;
            next = e.data.links.first.href;
            load(e.data.links.last.href).then(e=>prev=e.data.links.prev.href);
        }else{
            current = prev;
            prev = e.data.links.prev.href;
            next = e.data.links.next.href;
        }
        editDom(e)
    }));
}

export function nextG(){
    $("#next").on("click",()=>load(next).then(e=>{
        if(current ===e.data.links.last.href){
            current = e.data.links.first.href;
            load(e.data.links.first.href).then(e=>next=e.data.links.next.href);
            prev = e.data.links.last.href;
        }else{
            current = next;
            prev = e.data.links.prev.href;
            next = e.data.links.next.href;
        }
        editDom(e)
    }));

}
