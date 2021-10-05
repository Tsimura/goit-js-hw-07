import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImagesEl = document.querySelector('div.gallery');
const galleryMarkup = createImgGallery(galleryItems);

galleryImagesEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryImagesEl.addEventListener('click', onGalleryCatchClick);

function createImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `;
    })
    .join('');
}

function onGalleryCatchClick(e) {
  console.log(e.target);
}
//-----------//
console.log(galleryItems);

// https://youtu.be/pNxBoxbnTVA?t=4188

// https://youtu.be/kxwN7eXBNDQ?t=3693

// *https://youtu.be/kxwN7eXBNDQ?t=4928
