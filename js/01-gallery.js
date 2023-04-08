import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')
const markup = galleryItems.map(({preview, original, description })=>` 

<li 
data-imeges="${description}"
class=".gallery__item">
<img class=".gallery__item" src="${preview}" alt="${description}">
<a class=".gallery__item" href="${original}"></a>
</li>`
   
);
gallery.insertAdjacentHTML('beforeend', markup.join(''));
gallery.addEventListener('click',onClick );
function onClick (evt,){
    if(!evt.target.classList.contains('.gallery__item')){
        return;
    }
        
    const itemCard = evt.target.dataset.galleryItem;

    const currentItem = galleryItems.find(({description}) => description === itemCard);
            console.log(currentItem)
}

const instance = basicLightbox.create(`
<div>
<img src="${currentItem.original}" alt="${currentItem.description}"></a>
</div>
`)
instance.show()
  

