import { galleryItems } from './gallery-items.js';
// Change code below this line


const imageListEL = document.querySelector(".gallery");
const galleryMarkup = returnedList(galleryItems)

imageListEL.insertAdjacentHTML("beforeend", galleryMarkup)
console.log(imageListEL)


function returnedList(items) {

    return items
        .map((item) => 
        `<li class="gallery__item">
          <a class="gallery__link" href="large-image.jpg">
           <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
         </a>
         </li>`
    )
    .join("")
}


function handleClick(event) {
    event.preventDefault()
    
    // console.log(event.target.src)
    for (let i = 0; i < galleryItems.length; i++){
        
        if (galleryItems[i].preview === event.target.src) {

            const content = document.createElement('div')
                     
            content.innerHTML = `<img class="gallery above" src="${galleryItems[i].original}" data-source="${galleryItems[i].original}" alt="${galleryItems[i].description}" />`
            imageListEL.before(content)        
        }
    }
}

imageListEL.addEventListener("click", handleClick)
let showLightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay: 250});


// //  
//             <div class="gallery">
//               <a href="images/image1.jpg"><img src="${galleryItems[i].original}" alt="${galleryItems[i].description}" title=""/></a>
//               <a href="images/image2.jpg"><img src="${galleryItems[i + 1].original}" alt="${galleryItems[i + 1].description}" title="Beautiful Image"/></a>
//                                                              </div>`

      // const instance = basicLightbox.create(content)
            
        //     // instance.show(content)     
        //     let lightbox = new SimpleLightbox(returnedList(galleryItems)[i].src);
        //   //  console.log(lightbox)
            
        //     // lightbox.open
        //     console.log(galleryItems[i].original)
        //     console.log(lightbox)
            //