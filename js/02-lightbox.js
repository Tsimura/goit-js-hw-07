import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImagesEl = document.querySelector('.gallery');
const galleryMarkup = createImgGallery(galleryItems);

galleryImagesEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryImagesEl.addEventListener('click', onGalleryCatchClick);

function createImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
   <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
     `;
    })
    .join('');
}

function onGalleryCatchClick(e) {
  e.preventDefault();
  if (e.target.classList.contains('gallery__item')) {
    return;
  }
  //   console.log(e.target);
}

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

//-----------//
console.log(galleryItems);
