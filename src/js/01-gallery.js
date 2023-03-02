
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

const finalGallery = galleryItems => {

const allImagesArray = galleryItems.reduce(
  (acc, image) => acc + `
     <a class="gallery__item" href="${image.original}" >
       <img class="gallery__image" src="${image.preview}" alt="${image.description}">
     </a>
   `,
  "");
  list.insertAdjacentHTML('beforeend', allImagesArray);
};
  
finalGallery(galleryItems);


let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
