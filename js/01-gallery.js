import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImagesEl = document.querySelector('div.gallery');
const galleryMarkup = createImgGallery(galleryItems);
let imageSource = '';

let isActivModal = '';
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

galleryImagesEl.onclick = () => {
  basicLightbox
    .create(
      `
		<img width="1400" height="900"
    src="${imageSource}">
	`
    )
    .show(() => console.log('Модалка basicLightbox відкрита'));

  isActivModal = document.querySelector('.basicLightbox');
  window.addEventListener('keydown', onEscKeyPress);

  console.log(isActivModal);
  // console.log('Модалка відкрита');
};

function closeModal() {
  window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    console.log('Code key:', e.code);
    // console.log('Стукаю по кнопочках!');
    // galleryImagesEl.onclick = () => {
    //   basicLightbox.close(() => console.log('лайтбокс більше не видно'));
    // };
    closeModal();
  }
}

console.log(galleryItems);
