import { galleryItems } from './gallery-items.js';
// Change code below this line


const imageListEL = document.querySelector(".gallery");
const galleryMarkup = returnedList(galleryItems)

imageListEL.insertAdjacentHTML("beforeend", galleryMarkup)

imageListEL.addEventListener("click", handleClick)

function returnedList(items) {
    return items
        .map(
            (item) => 
                
        `<li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
           <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
         </a>
         </li>`
    )
    .join("")
}

function handleClick(event) {
    event.preventDefault()

    if (!event.target.classlist.contains("gallery__image")) {
        return;
    }
}

 new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });


