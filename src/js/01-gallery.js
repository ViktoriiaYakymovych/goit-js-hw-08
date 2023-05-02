import "../css/01-gallery.css";
import "../css/common.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector(".gallery");

const listItems = makeMarkup(galleryItems);
fullList(listItems);

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});

function makeMarkup(elements) {
    return elements.map((el) => {
        return `<li class="gallery__item">
        <a href="${el.original}" class="gallery__link"><img class="gallery__image" src="${el.preview}" alt="${el.description}"></a></li>`;
    }).join("");
}

function fullList(markup) {
    galleryList.innerHTML = markup;
}
