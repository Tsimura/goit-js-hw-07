import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImagesEl = document.querySelector('div.gallery');
const galleryMarkup = createImgGallery(galleryItems);
let imageSouce = '';

galleryImagesEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryImagesEl.addEventListener('click', onGalleryCatchClick);

function createImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}" >
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
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  imageSouce = e.target.dataset.source;
  // console.log(e.target);
  // console.log(imageSouce);
}

document.querySelector('div.gallery').onclick = () => {
  basicLightbox
    .create(
      `
		<img width="1400" height="900"
    src="${imageSouce}">
	`
    )
    .show();
};

//-----------//
console.log(galleryItems);
