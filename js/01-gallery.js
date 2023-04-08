import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `
  <li data-gallery-item="${description}" class="gallery__item">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </li>
`);
gallery.insertAdjacentHTML('beforeend', markup.join(''));
gallery.addEventListener('click', onClick);
let currentItem;
function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const itemCard = evt.target.parentNode.dataset.galleryItem;
  currentItem = galleryItems.find(({ description }) => description === itemCard);
  console.log(currentItem);
const instance = basicLightbox.create(`
<img src="${currentItem.original}" alt="${currentItem.description}">
`)

instance.show();

}
