import './styles.css';
import './js/load-more.js';
import refs from './js/refs';
import debounce from 'lodash.debounce';
import getImages from './js/load-more.js';

let page = 1;
refs.inputRef.addEventListener(
  'input',
  debounce(e => {
    e.preventDefault();
    page = 1;
    const search = e.target.value;
    if (search.length != 0) {
      getImages(search, page);
      page += 1;

      refs.loadBtnRef.addEventListener('click', () => {
        getImages(search, page);
        page += 1;
        window.scrollTo({
          top: document.body.clientHeight - 100,
          behavior: 'smooth',
        });
      });
    } else {
      refs.galleryRef.innerHTML = '';
    }
  }, 500),
);
