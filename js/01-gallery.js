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



function handleClick(event) {
    event.preventDefault()
                                                                     //   console.log(event.target.src)
    // console.log(event.target.src)
    for (let i = 0; i < galleryItems.length; i++){
        
        if (galleryItems[i].preview === event.target.src) {

            const content = document.createElement('div')
           
            
             content.innerHTML = `<img class="gallery__image" src="${galleryItems[i].original}" data-source="large-image.jpg" alt="${galleryItems[i].description}" />`
             const instance = basicLightbox.create(content)
            instance.show(content)     
            
        }
    }
}
imageListEL.addEventListener("click", handleClick)

