import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImageEL = document.getElementsByClassName("gallery__item");

console.log(galleryImageEL);

let newimgEL = " ";

for (let i = 0; i < galleryItems.length; i++){
    console.log(galleryItems[i]);

    let previewImageEL = galleryItems[i];
    
    newimgEL = document.createElement("img");
    
    newimgEL.innerHTML += `class="gallery__image" src = "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg" data-source=${galleryItems[i]} alt="Image description" />`;
   galleryImageEL.append(newimgEL);
};





