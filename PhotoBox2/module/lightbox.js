let vig;

export function afficherLightbox(vignette) {
    if(vignette.localName === 'img'){
        vig = vignette;
        console.log(vignette);
        $("#gallery").append(
            `
    <div class="lightboc_container" id="lightbox_container">
        <div id="lightbox">
            <div id="lightbox-head">
                <button type="button" class="close" id="lightbox_close"aria-label="Close">
                    <span aria-hidden="true">&Chi;</span>
                </button>
                <h1 id="lightbox_title" class="text-center">${vignette.attributes[3].value}</h1>
            </div>

            <div id="lightbox-img">
                <img id="lightbox_full_img" src="${vignette.dataset.img}">
                <a id="prev" class="prev" >❮</a>
                 <a id="nxt" class="next" >❯</a> 
            </div>
            
        </div>
    </div>
        `);
        $("#lightbox_close").on("click",enleverLightbox);
        document.querySelector('#prev').addEventListener("click",(e)=>changerImage(-1));
        document.querySelector('#nxt').addEventListener("click",(e)=>changerImage(+1));
    }
}

export function enleverLightbox(){
  $("#lightbox_container").remove();
}

export function changerImage(number) {
    if(number<0){
        enleverLightbox();
        afficherLightbox(vig.parentNode.previousSibling.firstChild);
    }else{
        enleverLightbox();
        afficherLightbox(vig.parentNode.nextSibling.firstChild);
    }
}