import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageListEL = document.querySelector(".gallery");

const galleryMarkup = imageMarkup(galleryItems);

imageListEL.insertAdjacentHTML("beforeend", galleryMarkup)

function imageMarkup(Items) {
    return Items
        .map((item) =>
            
            ` <li class="gallery__item">
           <a class="gallery__link" href="${item.original}">
           <img class="gallery__image" src="${item.preview}"
              data-source="large-image.jpg" alt="${item.description}" />
           </a>
          </li>`
    )
        .join("");
}


