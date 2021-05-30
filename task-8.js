import galleryItem from "/gallery-items.js";

const galleryList = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.lightbox');
const btn = document.querySelector('[data-action="close-lightbox"]');
const overlay = document.querySelector('.lightbox__overlay');

const galleryMarkup = createGalleryMarkup(galleryItem);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);


function createGalleryMarkup (galleryItem) {
    return galleryItem
    .map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a
        class="gallery__link"
        href="${original}"
        >
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>
        `
    })
    .join('');
    
    console.log(markup);
}

galleryList.addEventListener('click', onGalleryListClick);
btn.addEventListener('click', onCloseBtnClick);
window.addEventListener('keydown', onCloseBtnClick);
overlay.addEventListener('click', onCloseBtnClick);

function onGalleryListClick(event) {
    if(!event.target.classList.contains('gallery__image')) {
        return;
    } 
    event.preventDefault();
    if (event.target.nodeName === 'IMG') {
        lightbox.classList.add('is-open');
        lightbox.querySelector('.lightbox__image').src = event.target.dataset.source;
        lightbox.querySelector('.lightbox__image').alt = event.target.alt;
    }
}

function onCloseBtnClick(event) {
    if(event.target.nodeName === 'BUTTON' || event.key === 'Escape' || 
    event.type === 'click') {
        lightbox.classList.remove('is-open');
    }
}

const image = document.querySelector('.lightbox__image');
console.log(image.setAttribute('src', '')); 

// document.getElementByClass('lightbox__image').removeAttribute('src');







