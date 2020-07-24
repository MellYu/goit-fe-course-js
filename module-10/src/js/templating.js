import galleryItem from './../templating/gallery-item.hbs';
import menu from './../menu.json';

const gallery = galleryItem(menu);
const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', gallery);
