import './styles.css';
import './js/load-more.js';
import refs from './js/refs';
import createGallery from './js/load-more.js';
import imageCard from './template/image-card.hbs';

refs.inputRef.addEventListener('submit', e => {
  e.preventDefault();
  createGallery.clearPage();
  const searchValue = e.currentTarget.elements.query.value;
  createGallery.getImage(searchValue).then(images => {
    if (images.length !== 0) {
      refs.loadBtnRef.classList.remove('visibility-cl');
      return refs.galleryRef.insertAdjacentHTML('beforeend', imageCard(images));
    }
  });
  createGallery.request = searchValue;
});

refs.loadBtnRef.addEventListener('click', e => {
  e.preventDefault();
  const searchValue = createGallery.request;
  createGallery.pageUpdate();
  createGallery.getImage(searchValue).then(images => {
    if (images.length !== 0) {
      return refs.galleryRef.insertAdjacentHTML('beforeend', imageCard(images));
    }
  });
  window.scrollTo({
    top: document.body.clientHeight - 100,
    behavior: 'smooth',
  });
});
