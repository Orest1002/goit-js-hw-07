import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `
<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
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



  const lightbox = new SimpleLightbox('.gallery__item a',  {
    captionsData : "${description}",
    className: "simple-lightbox",
  });
  console.log(lightbox.options);
}




