import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImagesEl = document.querySelector('div.gallery');
const galleryMarkup = createImgGallery(galleryItems);
let imageSource = '';

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
  imageSource = e.target.dataset.source;
  // console.log(e.target);
  // console.log(imageSource);
}

document.querySelector('div.gallery').onclick = () => {
  basicLightbox
    .create(
      `
		<img width="1400" height="900"
    src="${imageSource}">
	`
    )
    .show();

  const modEl = document.querySelector('.basicLightbox');
  console.log(modEl);
  console.log('Модалка відкрита');

  window.addEventListener('keydown', onEscKeyPress);
};

//=====// солянка

// є модалка - є клас, потрібно при натискані еск, просто знімати клас і модалка зникне.
// повернутись, спробувати реалізувати

function onEscKeyPress(e) {
  console.log('Стукаю по кнопочках!');
}
//====//

//-----------//
console.log(galleryItems);
