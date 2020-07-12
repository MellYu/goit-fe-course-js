import images from "./gallery-items.js";

const refs = {
  galleryRef: document.querySelector('.js-gallery'),
  lightBoxRef: document.querySelector('.lightbox'),
  lightBoxImgRef: document.querySelector('.lightbox__image'),
  lightBoxBtn: document.querySelector('button[data-action="close-lightbox]'),
};
const galleryList = () => {
    const galleryArray = [];
    const imageListItemRef = document.createElement('li');
    const imageAdrRef = document.createElement('a');
    const imageRef = document.createElement('img');
    imageRef.classList.add('gallery__image');
    imageAdrRef.classList.add('gallery__link')
    imageListItemRef.classList.add('gallery__item');
    imageAdrRef.appendChild(imageRef)
    imageListItemRef.appendChild(imageAdrRef);
    images.forEach(image =>{
      imageAdrRef.href = image.original;
      imageRef.src = image.preview;
      imageRef.alt = image.description;
      imageRef.dataset.source = image.original;
      galleryArray.push(imageListItemRef.outerHTML);
    })
    return galleryArray.join('');
  };
  refs.galleryRef.insertAdjacentHTML('afterbegin', galleryList());

  const openLightbox = (event) => {
    event.preventDefault();

    if(event.target.nodeName !== 'IMG'){
      return;
    }

    const target = event.target;
    const imageSrc = target.dataset.source;

    refs.lightBoxRef.classList.add('is-open');
    refs.lightBoxImgRef.src = imageSrc;
  };

  refs.galleryRef.addEventListener('click', openLightbox);

  const closeLightbox = () =>{
    refs.lightBoxRef.classList.remove('is-open');
  };

  const onPressEsc = (event) => {
    if(event.code === 'Escape'){
      closeLightbox();
    }
  };

  const outOfImage = (event)=>{
    if(event.code !== 'IMG'){
      closeLightbox();
    }
  };

  window.addEventListener('keydown', onPressEsc);
  refs.lightBoxRef.addEventListener('click', outOfImage);