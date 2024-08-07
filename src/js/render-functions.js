import { sortUserPlugins } from "vite";
// Додай відображення великої версії зображення з бібліотекою SimpleLightbox для повноцінної галереї.
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryList = document.querySelector(".gallery-list");

function renderImages(images) {
    const markup = images
    .map(({                         //Кожне зображення описується об'єктом, з такими властивостями.
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
    })=> `
    <li>
    <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}"/>
        </a>
        <div class="text-wrapper">
    <p><b>Likes:</b>: ${likes}</p>
    <p><b>Views:</b>: ${views}</p>
    <p><b>Comments:</b>: ${comments}</p>
    <p><b>Downloads:</b>: ${downloads}</p>
        </div>
    </li>
    `
) 
.join('');

galleryList.insertAdjacentHTML("beforeend", markup);
}

export function clearGallery() {
    galleryList.innerHTML = '';
}


