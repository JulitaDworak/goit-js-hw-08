import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

gallery.innerHTML = ""

for (const image of galleryItems) {
    const newImage = `
    <a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
      </a>
    `
    gallery.innerHTML += newImage
}

const lightbox = new SimpleLightbox('.gallery a', { });
